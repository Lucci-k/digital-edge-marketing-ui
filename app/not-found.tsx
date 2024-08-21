'use client'

import Image from "next/image"
import digitalEdge from '../assets/digital-edge-tranparent.png'

const NotFound = () => {
  return (
      <main className="flex flex-grow flex-col items-center justify-between">
          <div className="max-w-screen-xl mx-auto my-auto px-4 flex items-center justify-start md:px-8">
              <div className="max-w-lg mx-auto text-center">
                  <div className="pb-6">
                    <Image src={digitalEdge} width={250} height={118} alt="logo" className="mx-auto"/>
                  </div>
                  <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                      Page not found
                  </h3>
                  <p className="text-gray-600 mt-3">
                      Sorry, the page you are looking for could not be found or has been removed.
                  </p>
              </div>
          </div>
      </main>
  )
}

export default NotFound
