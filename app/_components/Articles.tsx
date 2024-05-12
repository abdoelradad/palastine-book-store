import Image from "next/image";
import React from "react";

const articles = [
  {
    title: "تاريخ فلسطين",
    content:
      "متع منطقة فلسطين بموقع استراتيجي بين ثلاث قارات، ولها تاريخ مضطرب باعتبارها مفترق طرق للدين والثقافة والتجارة والسياسة. فلسطين هي مهد اليهودية والمسيحية، وقد سيطرت عليها العديد من الممالك والقوى، بما في ذلك مصر القديمة، وإسرائيل القديمة",
    img: "/article.webp",
  },
  {
    title: "تاريخ فلسطين",
    content:
      "متع منطقة فلسطين بموقع استراتيجي بين ثلاث قارات، ولها تاريخ مضطرب باعتبارها مفترق طرق للدين والثقافة والتجارة والسياسة. فلسطين هي مهد اليهودية والمسيحية، وقد سيطرت عليها العديد من الممالك والقوى، بما في ذلك مصر القديمة، وإسرائيل القديمة",
    img: "/article.webp",
  },
  {
    title: "تاريخ فلسطين",
    content:
      "متع منطقة فلسطين بموقع استراتيجي بين ثلاث قارات، ولها تاريخ مضطرب باعتبارها مفترق طرق للدين والثقافة والتجارة والسياسة. فلسطين هي مهد اليهودية والمسيحية، وقد سيطرت عليها العديد من الممالك والقوى، بما في ذلك مصر القديمة، وإسرائيل القديمة",
    img: "/article.webp",
  },
  {
    title: "تاريخ فلسطين",
    content:
      "متع منطقة فلسطين بموقع استراتيجي بين ثلاث قارات، ولها تاريخ مضطرب باعتبارها مفترق طرق للدين والثقافة والتجارة والسياسة. فلسطين هي مهد اليهودية والمسيحية، وقد سيطرت عليها العديد من الممالك والقوى، بما في ذلك مصر القديمة، وإسرائيل القديمة",
    img: "/article.webp",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="max-w-6xl mx-auto py-12 px-5 md:px-0">
      <h3 className="  text-right text-3xl md:text-5xl font-semibold border-b-[2px] py-2">
        أحدث المقالات
      </h3>

      <div className="py-10 grid md:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
        {articles.map((article, index) => {
          return (
            <div key={index} className="md:h-[400px] bg-white shadow-md">
              <div className="w-full h-[300px] md:h-[40%] mb-1">
                <Image
                  src={article.img}
                  width={600}
                  height={600}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-3 md:py-2 py-5 text-right h-[60%]">
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-500 leading-6">
                  {article.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
