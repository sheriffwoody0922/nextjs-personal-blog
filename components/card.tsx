

export function CardEnlarge(data: object) {
  return <div key={data.link} className="grid grid-cols-1 ">
    <div className="glass-card flex flex-col md:flex-row items-stretch border rounded-lg overflow-hidden !min-h-[220px]">


      <a
        rel="nofollow noopener"
        target="_blank"
        href={data.link}
        title={data.title}
        className="group  w-full h-auto md:w-48 xl:w-40 sm:h-48 !min-h-52 md:h-full block self-start flex-shrink-0 bg-gray-100 overflow-hidden relative no-underline"
      >
        <img
          src={data.cover}
          data-tip={data.excerpt}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 ease-out transition duration-500" />

      </a>



      <div className="flex flex-col px-4 pt-4 pb-2 xl:pt-4 xl:pb-2 xl:px-4 justify-between relative !h-full" data-tip={data.excerpt}>
        <div className="flex flex-col p-0 m-0">

          <h2 className="text-gray-800 text-3xl font-bold">
            <a target="_blank"
              href={data.link}
              rel="nofollow noopener"
              className="transition duration-100 no-underline"
            >
              {data.title}
            </a>
          </h2>
          <p className="text-gray-500 text-md mt-2 mb-2 leading-6 overflow-ellipsis overflow-hidden">{data.description || data.excerpt}</p>

        </div>

        <div className="flex ">
          {data?.tags?.map(tag => (
            <span key={tag} className="text-indigo-500 font-semibold text-sm mr-1 border-2 border-gray-200 rounded-md px-2">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  </div>
}
