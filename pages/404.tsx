import { Icon404, WebmeisterLogo } from '../components/Svg'

export default function Custom404() {
    return (
        <section className="!min-h-[96vh] !max-w-full  relative overflow-hidden z-60">
            <div className="w-full h-screen bg-overlay absolute py-20 sm:py-20 lg:py-20">
                <div className="flex flex-col items-center">

                    <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4 mt-10 sm:mt-20 md:mt-30">
                        SORRY
                    </p>
                    <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
                        Page not found
                    </h1>

                    <p className="max-w-full text-gray-500 md:text-lg text-center mb-12">
                        The page you’re looking for doesn’t exist.
                    </p>

                    <a
                        href="/"
                        className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    >
                        Go home
                    </a>
                </div>
            </div>
            <Icon404 />
        </section>
    )
}
