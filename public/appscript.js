// this script is used to create folders in Google Drive for customer projects
// it is triggered from a custom menu in Google Sheets
const DriveApp = {};
const Logger = {};

// entry point
// esta funcion es llamada por el bot luego de crear un cliente
function main(company = "company_name", customer = "customer_name", project = "project_name") {
  const companyFolderId = createCompanyFolder(company);
  duplicarTemplateFolder(companyFolderId, company, customer, project);
  return companyFolderId;
}
// retorna el id de la carpeta del proyecto
// se debe usar otro ciclo del bot para renombrar las carpetas
function createCompanyFolder(company = "company_name") {
  try {
    const companyName = company;

    // folder "Customers"
    const customersFolderId = "1LfP1-F45VbJxhN2NZe8HpbNsrHJj7oNU"; // [TODO] set folder ID
    const carpetaRaiz = DriveApp.getFolderById(customersFolderId);

    let carpetaCliente;
    const carpetasClientes = carpetaRaiz.getFoldersByName(companyName);
    if (carpetasClientes.hasNext()) {
      carpetaCliente = carpetasClientes.next();
    } else {
      carpetaCliente = carpetaRaiz.createFolder(companyName);
      Logger.log(`Carpeta de cliente creada: ${companyName} (ID: ${carpetaCliente.getId()})`);
    }

    return carpetaCliente.getId();
  } catch (e) {
    Logger.log(`Error al crear carpetas: ${e.message}`);
    return `Error: ${e.message}`;
  }
}

// Duplicar una carpeta bajo la carpeta raíz
function duplicarCarpetaEnRaiz(idCarpetaOrigen, idCarpetaDestino, nombreNuevaCarpeta) {
  try {
    // carpeta a ser duplicada
    const carpetaOrigen = DriveApp.getFolderById(idCarpetaOrigen);
    // carpeta donde se duplicara
    const carpetaRaiz = DriveApp.getFolderById(idCarpetaDestino);

    // Crear nueva carpeta bajo la raíz
    const nuevaCarpeta = carpetaRaiz.createFolder(nombreNuevaCarpeta);
    // const nuevaCarpeta = carpetaRaiz;
    // Copiar archivos
    const archivos = carpetaOrigen.getFiles();
    while (archivos.hasNext()) {
      const archivo = archivos.next();
      archivo.makeCopy(archivo.getName(), nuevaCarpeta);
    }
    // Copiar subcarpetas
    const subcarpetas = carpetaOrigen.getFolders();
    while (subcarpetas.hasNext()) {
      const subcarpeta = subcarpetas.next();
      const subcarpetaCopia = nuevaCarpeta.createFolder(subcarpeta.getName());
      copiarContenidoCarpeta(subcarpeta, subcarpetaCopia);
    }
    Logger.log(`Carpeta duplicada: ${nombreNuevaCarpeta} (ID: ${nuevaCarpeta.getId()})`);
    return nuevaCarpeta.getId();
  } catch (e) {
    Logger.log(`Error al duplicar carpeta: ${e.message}`);
    return `Error: ${e.message}`;
  }
}

// Copia recursiva de contenido de una carpeta
function copiarContenidoCarpeta(origen, destino) {
  // Copiar archivos
  const archivos = origen.getFiles();
  while (archivos.hasNext()) {
    const archivo = archivos.next();
    archivo.makeCopy(archivo.getName(), destino);
  }
  // Copiar subcarpetas
  const subcarpetas = origen.getFolders();
  while (subcarpetas.hasNext()) {
    const subcarpeta = subcarpetas.next();
    const subcarpetaCopia = destino.createFolder(subcarpeta.getName());
    copiarContenidoCarpeta(subcarpeta, subcarpetaCopia);
  }
}

// paso 2:
// duplica la carpeta de plantilla, luego renombra las carpetas dentro de ella
function duplicarTemplateFolder(
  folder,
  company = "company_name",
  customer = "customer_name",
  project = "project_name"
) {
  let duplicadoId = duplicarCarpetaEnRaiz(
    "1_L_hS3s5u1L1vqPqfzyVBMrUItOZ3BXw", // [TODO] TEMPLATE FOLDER TO DUPLICATE
    folder, // [TODO] customers folder
    customer // [TODO] change to [Customer Name]
  );

  // order edit fields
  // company (store) > customer > project
  const companyName = company; // company name
  const projectName = project; // event project name

  const cityOrPlace = "New York"; // city or place
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  // ejemplo 4pm
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Renombrar carpetas dentro de la carpeta duplicada
  try {
    const carpeta = DriveApp.getFolderById(duplicadoId);
    renombrarRecursivo(carpeta, projectName, companyName, companyName, cityOrPlace, date, time);
  } catch (e) {
    Logger.log("Error al renombrar carpetas: " + e.message);
  }
  Logger.log(`Template folder duplicated and renamed with ID: ${duplicadoId}`);
}

function renombrarRecursivo(carpeta, projectName, companyName, storeName, cityOrPlace, date, time) {
  // Renombrar carpeta si contiene el texto a reemplazar
  let nombreActual = carpeta.getName();
  let nuevoNombre = nombreActual;
  if (nuevoNombre.indexOf("[Project name]") !== -1) {
    nuevoNombre = nuevoNombre.replace("[Project name]", projectName);
  }
  if (nuevoNombre.indexOf("[Company name]") !== -1) {
    nuevoNombre = nuevoNombre.replace("[Company name]", companyName);
  }
  if (nuevoNombre.indexOf("[Store name]") !== -1) {
    nuevoNombre = nuevoNombre.replace("[Store name]", storeName);
  }
  if (nuevoNombre.indexOf("[City or place]") !== -1) {
    nuevoNombre = nuevoNombre.replace("[City or place]", cityOrPlace);
  }
  if (nuevoNombre.indexOf("[City]") !== -1) {
    nuevoNombre = nuevoNombre.replace("[City]", cityOrPlace);
  }
  if (nuevoNombre.indexOf("[Date]") !== -1) {
    nuevoNombre = nuevoNombre.replace("[Date]", date);
  }
  if (nuevoNombre.indexOf("[Time]") !== -1) {
    nuevoNombre = nuevoNombre.replace("[Time]", time);
  }
  // Puedes agregar más reemplazos aquí para date y time si lo necesitas
  if (nuevoNombre !== nombreActual) {
    carpeta.setName(nuevoNombre);
    Logger.log("Carpeta renombrada: " + nuevoNombre + " (ID: " + carpeta.getId() + ")");
  }
  // Recorrer subcarpetas
  const subcarpetas = carpeta.getFolders();
  while (subcarpetas.hasNext()) {
    const subcarpeta = subcarpetas.next();
    renombrarRecursivo(subcarpeta, projectName, companyName, storeName, cityOrPlace, date, time);
  }
}

/**
 * Main entry point for the script.
 */
main();
createCompanyFolder();
duplicarTemplateFolder();
