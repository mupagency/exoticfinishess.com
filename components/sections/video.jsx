import Head from "next/head";

const VideoSection = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/media/intro.mp4" as="video" type="video/mp4" />
      </Head>
      <div className="relative h-[calc(100dvh-120px)] md:min-h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          priority="high"
        >
          <source src="/media/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoSection;
