import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className="flex flex-col text-center justify-center lg:space-y-12">
                <div className="w-full text-center flex justify-center">
                    <img src='avatar.png' alt="Ravan Babayev" className="select-none h-[172px] w-[172px]"/>
                </div>
                <div className="space-y-8 lg:w-6/12 mx-auto">
                    <h3 className="text-gray-400 text-xl leading-snug uppercase robotoMono">Ravan Babayev</h3>
                    <h1 className="title">software engineer</h1>
                </div>
                <div className="pt-16">
                    <a href="http://api.whatsapp.com/send?phone=908508886436" target="_blank" rel="noreferrer"
                       className="px-8 py-3 rounded-full inline-flex justify-center items-center space-x-2 transition-all group select-none ring-0 hover:ring-4 duration-200 lg:px-16 lg:py-6 lg:hover:ring-8 bg-blue-500 ring-blue-300">
                    <span className="text-sm leading-6 font-semibold lg:text-2xl lg:leading-8 text-white">
                        Say hellooo
                    </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-white">
                            <path fill="none" d="M0 0H256V256H0z"></path>
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                                d="M64 192L192 64"
                            ></path>
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                                d="M88 64L192 64 192 168"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="absolute top-8 right-16 space-x-6">
                <a href="https://github.com/ravanbabayev" className="inline-flex items-center space-x-1"
                   target="_blank">
                    <span className="robotoMono text-white uppercase">Github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5 text-white">
                        <path fill="none" d="M0 0h256v256H0z"/>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={16}
                            d="M64 192 192 64M88 64h104v104"
                        />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ravanbabayev/" className="inline-flex items-center space-x-1"
                   target="_blank">
                    <span className="robotoMono text-white uppercase">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5 text-white">
                        <path fill="none" d="M0 0h256v256H0z"/>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={16}
                            d="M64 192 192 64M88 64h104v104"
                        />
                    </svg>
                </a>
            </div>
        </>
    )
}
