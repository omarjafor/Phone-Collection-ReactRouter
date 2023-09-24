import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            {/*   <div>
                <h1 className="my-10 text-black font-bold text-2xl">Oops!!! Nothing Found.</h1>

                <Link className="bg-indigo-600 py-3 px-3 text-white font-bold rounded-lg mt-5" to='/'>Go Back To Home</Link>
            </div>

            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className="">
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Looks like you have found the
                                    doorway to the great nothing
                                </h1>
                                <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                </div>
            </div> */}
            <div>
                <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"/>

                    
                    <div className="flex items-center justify-center min-h-screen bg-white">
                        <div className="flex flex-col">
                            <div className="flex flex-col items-center">
                                <div className="text-indigo-500 font-bold text-7xl">
                                    404
                                </div>

                                <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                                    This page does not exist
                                </div>

                                <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                                    The page you are looking for could not be found.
                                </div>
                            </div>

                            
                            <div className="flex flex-col mt-4">
                                <div className="text-gray-400 font-bold uppercase">
                                    Continue With
                                </div>

                                <div className="flex flex-col items-stretch mt-5">
                                    
                                    <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                        
                                        <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                            <i className="mdi mdi-home-outline mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"></i>
                                        </div>

                                        
                                        <div className="grow flex flex-col pl-5 pt-2">
                                            <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                            <Link to='/'>Home Page</Link>
                                            </div>

                                            <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                                Everything starts here
                                            </div>
                                        </div>

                                        
                                        <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                                    </div>

                                  
                                    <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                       
                                        <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                            <i className="mdi mdi-book-open-page-variant-outline mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"></i>
                                        </div>

                                        
                                        <div className="grow flex flex-col pl-5 pt-2">
                                            <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                                Blog
                                            </div>

                                            <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                                Read our awesome articles
                                            </div>
                                        </div>

                                      
                                        <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                                    </div>

                                
                                    <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                 
                                        <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                            <i className="mdi mdi-archive-settings-outline 
                            mx-auto text-indigo-800 text-2xl md:text-3xl"></i>
                                        </div>

                              
                                        <div className="grow flex flex-col pl-5 pt-2">
                                            <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                                Archive
                                            </div>

                                            <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                                Archived posts but still readable
                                            </div>
                                        </div>

                                  
                                        <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                                    </div>

                             
                                    <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                             
                                        <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                            <i className="mdi mdi-at mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"></i>
                                        </div>

                                
                                        <div className="grow flex flex-col pl-5 pt-2">
                                            <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                                Contact
                                            </div>

                                            <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                                Contact us for your questions
                                            </div>
                                        </div>

                                  
                                        <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ErrorPage;