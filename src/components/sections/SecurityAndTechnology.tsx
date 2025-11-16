import Image from "next/image";

const SecurityAndTechnologySection = () => {
  return (
    <section className="px-[10%] py-20 bg-[var(--color-light-bg)]">
      <h2 className="text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] text-center mb-12 max-w-7xl mx-auto">Security & Technology</h2>
      <p className="text-[var(--color-secondary-text)] mb-16 max-w-7xl mx-auto">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less hormal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      </p>
      <Image src="/mockups/mock5.png" alt="Security and Technology" width={1000} height={500} className="w-full max-w-7xl mx-auto" />
    </section>
  );
};

export default SecurityAndTechnologySection;