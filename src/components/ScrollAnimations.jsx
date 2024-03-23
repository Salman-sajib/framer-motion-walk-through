import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function ScrollAnimations() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgb(86, 1, 245)', 'rgb(100, 1, 240)', 'rgb(1, 245, 13)']
  );

  return (
    <div>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          background,
        }}
        className='  sticky top-0 w-full h-5 origin-left'
      ></motion.div>
      <div className=' max-w-[700px] mx-auto p-5 flex flex-col items-center gap-8'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dicta ipsa exercitationem hic at voluptatibus
          accusamus harum placeat atque enim? Blanditiis labore obcaecati maxime
          ipsum dolorum architecto? Dolorum recusandae voluptate ullam natus
          similique eaque, deserunt possimus excepturi ratione laborum dicta
          adipisci iste dolorem eligendi voluptas deleniti itaque omnis, debitis
          blanditiis eum? Sit officiis cumque molestias quas mollitia officia
          perspiciatis voluptate iusto atque sunt! Earum adipisci magnam
          mollitia velit dicta laudantium architecto, recusandae, aliquam libero
          tenetur assumenda cum labore officiis eius eos quibusdam totam at
          placeat nam? Velit fugit, debitis iste incidunt, quibusdam aperiam
          explicabo deleniti consequatur quasi, modi ut soluta?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam
          adipisci aliquid quaerat quod ut cum, eos omnis ducimus minus animi,
          dolor culpa, perferendis quidem numquam. Iste ratione, quas nemo
          expedita optio molestias eveniet commodi dolorum maiores tempore
          dignissimos et natus in incidunt sequi ea esse fugiat corporis sed
          repellat nam laborum nulla tempora suscipit! Ut, praesentium alias
          illo dolor assumenda, eius non sequi eveniet tenetur maiores saepe
          possimus? Illum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          doloremque quisquam illo fugiat dolores nam molestias cumque assumenda
          consectetur perspiciatis pariatur vitae similique sequi voluptates
          repudiandae, quia quaerat, at odio nemo, illum ipsam. Mollitia
          repudiandae enim iste eius doloribus? Accusantium fugiat, laboriosam
          nisi, at a error voluptate perferendis qui tempore illum consequatur,
          molestias ut cum quae. Odio ab eligendi eius, beatae aspernatur dicta
          cumque fugiat, mollitia sapiente sequi at id asperiores nostrum vel
          modi? Hic tenetur expedita unde magni impedit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dicta ipsa exercitationem hic at voluptatibus
          accusamus harum placeat atque enim? Blanditiis labore obcaecati maxime
          ipsum dolorum architecto? Dolorum recusandae voluptate ullam natus
          similique eaque, deserunt possimus excepturi ratione laborum dicta
          adipisci iste dolorem eligendi voluptas deleniti itaque omnis, debitis
          blanditiis eum? Sit officiis cumque molestias quas mollitia officia
          perspiciatis voluptate iusto atque sunt! Earum adipisci magnam
          mollitia velit dicta laudantium architecto, recusandae, aliquam libero
          tenetur assumenda cum labore officiis eius eos quibusdam totam at
          placeat nam? Velit fugit, debitis iste incidunt, quibusdam aperiam
          explicabo deleniti consequatur quasi, modi ut soluta?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam
          adipisci aliquid quaerat quod ut cum, eos omnis ducimus minus animi,
          dolor culpa, perferendis quidem numquam. Iste ratione, quas nemo
          expedita optio molestias eveniet commodi dolorum maiores tempore
          dignissimos et natus in incidunt sequi ea esse fugiat corporis sed
          repellat nam laborum nulla tempora suscipit! Ut, praesentium alias
          illo dolor assumenda, eius non sequi eveniet tenetur maiores saepe
          possimus? Illum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          doloremque quisquam illo fugiat dolores nam molestias cumque assumenda
          consectetur perspiciatis pariatur vitae similique sequi voluptates
          repudiandae, quia quaerat, at odio nemo, illum ipsam. Mollitia
          repudiandae enim iste eius doloribus? Accusantium fugiat, laboriosam
          nisi, at a error voluptate perferendis qui tempore illum consequatur,
          molestias ut cum quae. Odio ab eligendi eius, beatae aspernatur dicta
          cumque fugiat, mollitia sapiente sequi at id asperiores nostrum vel
          modi? Hic tenetur expedita unde magni impedit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dicta ipsa exercitationem hic at voluptatibus
          accusamus harum placeat atque enim? Blanditiis labore obcaecati maxime
          ipsum dolorum architecto? Dolorum recusandae voluptate ullam natus
          similique eaque, deserunt possimus excepturi ratione laborum dicta
          adipisci iste dolorem eligendi voluptas deleniti itaque omnis, debitis
          blanditiis eum? Sit officiis cumque molestias quas mollitia officia
          perspiciatis voluptate iusto atque sunt! Earum adipisci magnam
          mollitia velit dicta laudantium architecto, recusandae, aliquam libero
          tenetur assumenda cum labore officiis eius eos quibusdam totam at
          placeat nam? Velit fugit, debitis iste incidunt, quibusdam aperiam
          explicabo deleniti consequatur quasi, modi ut soluta?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam
          adipisci aliquid quaerat quod ut cum, eos omnis ducimus minus animi,
          dolor culpa, perferendis quidem numquam. Iste ratione, quas nemo
          expedita optio molestias eveniet commodi dolorum maiores tempore
          dignissimos et natus in incidunt sequi ea esse fugiat corporis sed
          repellat nam laborum nulla tempora suscipit! Ut, praesentium alias
          illo dolor assumenda, eius non sequi eveniet tenetur maiores saepe
          possimus? Illum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          doloremque quisquam illo fugiat dolores nam molestias cumque assumenda
          consectetur perspiciatis pariatur vitae similique sequi voluptates
          repudiandae, quia quaerat, at odio nemo, illum ipsam. Mollitia
          repudiandae enim iste eius doloribus? Accusantium fugiat, laboriosam
          nisi, at a error voluptate perferendis qui tempore illum consequatur,
          molestias ut cum quae. Odio ab eligendi eius, beatae aspernatur dicta
          cumque fugiat, mollitia sapiente sequi at id asperiores nostrum vel
          modi? Hic tenetur expedita unde magni impedit!
        </p>
      </div>
    </div>
  );
}

export default ScrollAnimations;
