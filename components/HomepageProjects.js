import React from 'react'
import Image from 'next/image'

import filiz from '../public/img/decorative/decorative-7.webp'
import goldgrain from '../public/img/decorative/decorative-5.webp'
import mce from '../public/img/decorative/decorative-6.webp'
import lac from '../public/img/decorative/decorative-9.webp'
import livicom from '../public/img/decorative/decorative-light.webp'
import lovedb4 from '../public/img/decorative/decorative-10.webp'
import ipek from '../public/img/decorative/decorative-1500x999.webp'
import swirl from '../public/img/decorative/swirl-white.svg'
import cruise from '../public/img/decorative/decorative-11.webp'

import { ShopifyLogo, WixLogo, WebflowLogo, SwirlIcon
 } from '../components/Svg'

function HomepageProjects() {
  return (
    <section className="relative px-4 sm:px-8 py-16 overflow-hidden " aria-label="Ecommerce">
      {/*<Image
        layout="fill"
        className="absolute left-0 z-0 object-cover object-center w-full h-full opacity-10 top-24"
        src={swirl}
      />*/}
      <SwirlIcon />

      <div className="container relative z-10 sm:px-8 mx-auto  max-w-7xl">
        <div className="w-full flex flex-col md:flex-col">
          <div className="w-full mb-8 sm:w-full md:w-full sm:pr-4 md:pr-12 ">
            <h2 className="tracking-widest text-xs uppercase mb-4">E-COMMERCE SOLUTIONS</h2>
            <span className="my-3 text-4xl sm:text-5xl tracking-tighter lg:text-6xl">E-COMMERCE</span>
            <p className="max-w-lg text-lg text-gray-500">
              I provide web solutions to my clients on Shopify and Wix as an expert web developer.{' '}
            </p>
          </div>
          <div className="w-full relative flex justify-start opacity-90">
            <ShopifyLogo />
            <WixLogo />
            <WebflowLogo />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pb-32 pt-12 sm:pt-8 md:pt-0">
          {/* FİLİZ GÜVENLİK */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-1 sm:row-start-2 md:row-start-3">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-40 bg-gradient-to-b from-transparent to-gray-900" />
                <Image
                  layout="fill"
                  objectFit
                  placeholder="blur"
                  sizes="30vw"
                  className="absolute object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={filiz}
                  alt="decorative"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  <a
                    href="https://www.filizguvenlik.com.tr"
                    target="_blank"
                    rel="noopener"
                    aria-label="İzmir kamera sistemleri"
                    title="İzmir kamera sistemleri"
                    className="hover:no-underline"
                  >
                    İZMİR KAMERA SİSTEMLERİ
                  </a>
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Filiz Güvenlik Sistemleri
                </h4>
                <span className="project-url">www.filizguvenlik.com.tr</span>
              </div>
            </div>
          </div>

          {/* GOLD GRAIN */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-1 xl:col-start-2 sm:row-start-4 md:row-start-5 xl:row-start-2">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-40 bg-gradient-to-b from-transparent to-gray-900" />
                <Image
                  layout="fill"
                  objectFit
                  placeholder="blur"
                  sizes="30vw"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={goldgrain}
                  alt="decorative"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  ORGANIC FOOD
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Gold Grain Organics
                </h4>
                <span className="project-url">www.gftint.com</span>
              </div>
            </div>
          </div>

          {/* LA-CUISINETTE */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-1 xl:col-start-1 sm:row-start-9 md:row-start-7 xl:row-start-5">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-40 bg-gradient-to-b from-transparent to-gray-900" />
                <Image
                  layout="fill"
                  objectFit
                  placeholder="blur"
                  sizes="30vw"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={lac}
                  alt="decorative"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  VEGAN PASTA
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  La-cuisinette
                </h4>
                <span className="project-url">www.la-cuisinette.com</span>
              </div>
            </div>
          </div>

          {/* MCE */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-3 sm:row-start-1 md:row-start-4 xl:row-start-1">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-40 bg-gradient-to-b from-transparent to-gray-900" />
                <Image
                  layout="fill"
                  objectFit
                  placeholder="blur"
                  sizes="30vw"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={mce}
                  alt="decorative"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  CONSTRUCTION
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  MCE Global
                </h4>
                <span className="project-url">mceglobal.com.tr</span>
              </div>
            </div>
          </div>

          {/* LIVICOM */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-3 sm:row-start-3 md:row-start-1 xl:row-start-3">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-40 bg-gradient-to-b from-transparent to-gray-900" />
                <Image
                  layout="fill"
                  objectFit
                  placeholder="blur"
                  sizes="30vw"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={livicom}
                  alt="decorative"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  <a
                    href="https://livicomturkiye.com"
                    target="_blank"
                    className="hover:no-underline"
                    rel="noopener"
                    aria-label="Akıllı ev güvenlik sistemleri"
                    title="Akıllı ev güvenlik sistemleri"
                  >
                    AKILLI EV GÜVENLİK SİSTEMLERİ
                  </a>
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Livicom
                </h4>
                <span className="project-url">livicomturkiye.com</span>
              </div>
            </div>
          </div>

          {/* PRIVATE TRANSFER */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-3 sm:row-start-8 md:row-start-6 xl:row-start-5">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-40 bg-gradient-to-b from-transparent to-gray-900" />
                <Image
                  layout="fill"
                  objectFit
                  placeholder="blur"
                  sizes="30vw"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={cruise}
                  alt="decorative"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  <a
                    href="https://privatetransfer.istanbul"
                    target="_blank"
                    className="hover:no-underline"
                    rel="noopener"
                    aria-label="Istanbul Private Transfer"
                    title="Istanbul Private Transfer"
                  >
                    ISTANBUL PRIVATE TRANSFER
                  </a>
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Private Transfer Istanbul
                </h4>
                <span className="project-url">privatetransfer.istanbul</span>
              </div>
            </div>
          </div>

          {/* CRUISE TRANSFER */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-2 sm:row-start-6 md:row-start-2 xl:row-start-4">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full opacity-40 bg-gradient-to-b from-transparent to-gray-900" />
                <Image
                  layout="fill"
                  objectFit
                  placeholder="blur"
                  sizes="30vw"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={cruise}
                  alt="decorative"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  <a
                    href="https://istanbulcruisetransfer.com/"
                    target="_blank"
                    className="hover:no-underline"
                    rel="noopener"
                    aria-label="Istanbul Cruise Port Transfer"
                    title="Istanbul Cruise Port Transfer"
                  >
                    ISTANBUL CRUISE PORT TRANSFER
                  </a>
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Istanbul Cruise Port Transfer
                </h4>
                <span className="project-url">istanbulcruisetransfer.com</span>
              </div>
            </div>
          </div>

          {/* LOVEDB4 */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-4 sm:row-start-5 md:row-start-3 xl:row-start-2">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full ">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-40" />
                <Image
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={lovedb4}
                  alt="decorative"
                  loading="lazy"
                  layout="fill"
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  FASHION
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Lovedb4
                </h4>
                <span className="project-url">www.lovedb4.com</span>
              </div>
            </div>
          </div>

          {/* IPEK BABY */}
          <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-4 sm:row-start-7 md:row-start-5 xl:row-start-4">
            <div className="relative flex flex-col items-start justify-end w-full h-full overflow-hidden bg-black shadow-lg rounded-xl group">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-40" />
                <Image
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-700 lg:opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  src={ipek}
                  alt="decorative"
                  objectFit
                />
              </div>
              <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-7">
                <span className="px-2 py-1 mb-3 text-xs font-semibold tracking-tight text-white uppercase bg-indigo-500 rounded-md">
                  ÇOCUK GİYİM
                </span>
                <h4 className="text-4xl font-bold tracking-tight !text-gray-100 sm:text-3xl md:text-2xl lg:text-3xl">
                  Ipek Baby
                </h4>
                <span className="project-url">www.ipekbaby.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomepageProjects
