import Image from "next/image";
const avatarUrl = "/e7ab6b079a7f7293b0092ac9c179cbc2690e9eee_full.jpg";

export default function Me() {
  return (
    <section className="px-20 py-10">
      <h2 className="p-3 text-7xl md:text-5xl lg:text-7xl tracking-widest">
        Oleksii
      </h2>
      <div className="grid grid-cols-4 p-6">
        <Image
          className="col-start-3 rounded-full"
          src={avatarUrl}
          alt="avatar"
          width={200}
          height={200}
        ></Image>
      </div>
      <p className="max-w-180 text-2xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
        recusandae odio ducimus placeat dolores accusamus quisquam sint, ipsum
        nemo pariatur omnis est rerum, sapiente possimus atque consequuntur
        debitis libero accusantium?
      </p>

      {/* <Image src="/e7ab6b079a7f7293b0092ac9c179cbc2690e9eee_full.jpg" alt="avatar" width={200} height={200}></Image> */}
      {/* <img src="/e7ab6b079a7f7293b0092ac9c179cbc2690e9eee_full.jpg" alt="avatar" /> */}
      {/* <Avatar /> */}
      <div className="min-h-16 m-12 ">
        <a
          href="mailto:oleksii@gmail.com"
          className="border px-12 py-5 hover:bg-amber-200 transition rounded-full"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
