import Image from 'next/image'

type CardProps = {
    title: string,
    description?: string,
    link: string,
    cover?: string,
    excerpt?: string,
    tags?: string[],
    slug?: string,
    index?: number,
    thumbnail?:string,
    nofollow?: boolean,
    keywords?: string[],
    topic?: string,
    date?: string
}
export function CardEnlarge(props: CardProps) {
    return <div key={props.link} className="card-enlarge grid grid-cols-1 mt-4">
        <div className="glass-card-card flex flex-col sm:flex-row items-stretch border rounded-lg overflow-hidden !min-h-[160px] border border-solid border-[rgba(255,255,255,0.2)]">


            <a
                rel={props.nofollow ? "nofollow noopener" : "noopener"}
                target="_blank"
                href={props.link}
                title={props.title}
                className="group w-full sm:w-48 md:w-40 xl:w-40 min-h-[140px] sm:h-44 md:h-50 relative block self-start flex-shrink-0  overflow-hidden no-underline"
            >
                <img
                    src={props.cover}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 ease-out transition duration-500 rounded-lg" />

            </a>



            <div className="flex flex-col pl-4 pt-4 pb-2 xl:pt-4 xl:pb-2 xl:px-4 justify-between relative !h-full" data-tip={props.excerpt}>
                <div className="flex flex-col p-0 m-0">


                    <a target="_blank"
                        href={props.link}
                        className="transition duration-100 no-underline text-xl"
                        rel={props.nofollow ? "nofollow noopener" : "noopener"}
                    >
                        <h3 className="text-gray-800 text-xl font-bold mt-2">{props.title}</h3>
                    </a>
                    <p className="text-gray-500 text-md mt-2 mb-2 leading-6 overflow-ellipsis overflow-hidden text-sm">{props.description || props.excerpt}</p>

                </div>

                <div className="flex ">
                    {props.tags?.map(tag => (
                        <span key={tag} className="text-indigo-500 font-semibold text-sm mr-[1px] border-[1px] border-gray-200 rounded-md px-1">
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    </div>
}

export function CardCover(props: CardProps) {
    return (

        <li key={props.link} className="flex flex-col frost-blur border rounded-lg overflow-hidden glass-card-card">
            <a href={props.link} rel={props.nofollow ? "nofollow noopener" : "noopener"} className="group h-32 md:h-32 lg:h-36 block  overflow-hidden relative">
                <img
                    src={props.cover}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="!min-w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-500"
                />
            </a>

            <div className="flex flex-col flex-1 p-4 sm:p-4 !pb-2">
                <h3 className="text-gray-800 text-xl font-semibold mb-2">
                    <a href={props.link} rel={props.nofollow ? "nofollow noopener" : "noopener"} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{props.title}</a>
                </h3>

                <p className="text-gray-500 mb-2 text-sm">{props.excerpt || props.description}</p>

                <div className="flex justify-start items-end mt-auto">

                    {props.tags?.map(tag => (
                        <span key={tag} className="text-gray-300 text-xs border rounded-md  px-2 py-1 mr-2 mt-2 overflow-ellipsis">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    )
}

export function ListItemCard(props: CardProps){
    return (
        <li

            title={props.title}
            className="group h-48 md:h-64 xl:h-64 flex flex-col  rounded-lg shadow-lg overflow-hidden relative border border-solid border-[rgba(255,255,255,0.2)]"
        >
            <Image
                layout="fill"
                sizes="30vw"
                loading="lazy"
                src={props.thumbnail || props.cover || "/img/placeholder.webp"}
                alt={(props.keywords && props.keywords[0]) || props.title}
                className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-700 z-0"
            />

            <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

            <div className="relative p-4 mt-auto">
                {props.date && <span className="block !text-gray-200 text-sm">{props.date}</span>}
                <h2 className="!text-white text-xl font-semibold transition duration-100 mb-2 relative">
                    <a
                        title={props.title}
                        href={`/${props.topic}/${props.slug}/`}
                        className="group"
                    >
                        {props.title}
                    </a>
                </h2>
            </div>
            <a
                title={props.title}
                href={`/${props.topic}/${props.slug}/`}
                className="group absolute top-0 left-0 right-0 bottom-0"
            />

        </li>
    )
}
