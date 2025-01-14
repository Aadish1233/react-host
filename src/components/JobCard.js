import React from 'react'

export default function JobCard() {
  return (
    <>
    <div className="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
  <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
      <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-bold text-gray-900">Open Positions</p>
          <p className="text-sm mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">Lorem ipsum dolor sit amet, consectetur
              adipis</p>
        </div>
        <div className="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
          <p className="sr-only">Search Position</p>
          <div className="relative">
            <div className="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
              <p>
                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                    stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21
                    21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </p>
            </div>
            <input placeholder="Search Positions " type="search" className="border block pt-2 pr-0 pb-2 pl-10 w-full py-2
                pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"/>
          </div>
        </div>
      </div>
      <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
        <div className="pt--10 pr-0 pb-10 pl-0">
          <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img
                    src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill" className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="description6" />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-gray-800 truncate">Engineering Manager</p>
                  <p className="text-gray-600 text-md">Slack</p>
                </div>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                <a href="/" className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">Apply</a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                    className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="description1" />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-gray-800 truncate">Senior Software Engineer</p>
                  <p className="text-gray-600 text-md">Basecamp</p>
                </div>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                <a href="/" className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">Apply</a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img src="https://djmag.com/sites/default/files/article/image/Spotify.png" className="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10" alt="description2" />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-gray-800 truncate">Frontend Developer</p>
                  <p className="text-gray-600 text-md">Spotify</p>
                </div>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                <a href="/" className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">Apply</a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img src="https://miro.medium.com/max/512/1*n81Kr3UGUVsF0LLRgRQrJw.jpeg" className="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10" alt="description3" />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-gray-800 truncate">Lead Software Engineer</p>
                  <p className="text-gray-600 text-md">Figma</p>
                </div>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                <a href="/" className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">Apply</a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img src="https://i.pinimg.com/originals/96/02/08/9602083f42463bb813399310d72233c5.png"
                    className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="description3" />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-gray-800 truncate">Software Engineeer</p>
                  <p className="text-gray-600 text-md">Pinterest</p>
                </div>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                <a href="/" className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
