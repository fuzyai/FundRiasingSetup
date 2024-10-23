import Image from 'next/image';

export default function MySection() {
    return(
        <section>
            <div>
                <h1 className="font-bold text-6xl mt-10 mb-10 px-[25%] text-center items-center">Great futures are built with a small charity</h1>
                <p className="mb-10 px-[37%] items-center">The worlds largest social fundraising platform optimized for your charity in a more easy way</p>
                  <div className="flex items-center mx-auto  justify-center">
                <button className="bg-black text-white p-2 mr-5 rounded-full items-center">Donate now</button>
                <button className="bg-slate-400 text-black p-2 rounded-full items-center">Watch Video</button>
                </div>
                    
            </div>

            <div className="flex justify-center mt-10 mx-auto space-x-3 "> 
                <Image width={200} height={100} src="/images3.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                <Image width={200} height={100} src="/images4.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                <Image width={200} height={100} src="/image5.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                <Image width={200} height={100} src="/image6.webp" alt=""  className="h-40 w-50 rounded-2xl" />
            </div>
            <div className="flex justify-between px-[20%] mt-7 text-center">
                <p>Let them be heard</p>
                <p>Lifeskills for <br />2,587  Children <br />in South Africa</p>
                <p>Join 5000+ <br />People Donate</p>
                <p>Sponsor food <br />education to <br />Orphans Ghana</p>
                <p>Your home for help</p>
            </div>

            <nav className="bg-lime-400  h-60 mx-auto mr-4 ml-4 mt-10 rounded-2xl">
                <section className="flex flex-col mx-auto justify-center">
                    <h1 className="flex mx-auto flex-col items-center justify-center font-bold text-lg mt-5">Fundraising on Pracima takes just a few minutes</h1>

                    <div className="flex justify-between mt-5 font-bold px-[17%]">
                        <h1>Give Happiness</h1>
                        <h1>Share Love</h1>
                        <h1>Build Socially</h1>
                    </div>
                    <div className="flex justify-evenly  ">
                        <button>
                            Giving happiness to others is one <br />
                            of the most fulilling things you <br />
                            can do in life.
                        </button>
                        <button>
                            When you share love with those <br />
                            around you, you create a ripple <br />
                            effect of kidness.
                        </button>
                        <button>
                            Building socially requires not just <br />
                            connecting with others, but also <br />
                            actively contributing.
                        </button>

                    </div>
                </section>
            </nav>
            <div className="mt-10 font-bold text-lg ml-10">
                <h1>Fundraisers in Extreme Need</h1>
            </div>
            <div className="flex justify-between mr-5 ml-5">
                <button className="bg-slate-200 rounded-2xl mt-5">
                    <Image width={200} height={100} src="/image1.webp" alt=""  className="rounded-2xl flex mx-auto justify-center" />
                    <p className="font-bold mt-2 ">Help Ghana Earthquake Relief Fund</p>
                    <p className="mt-2 mr-2 ml-2">
                        Since 2006, SOIL has been working in Urban... <br />
                        $90,294 raised of $100,000 goal
                    </p>
                    <button className="ml-[5%] mt-3 bg-slate-400  rounded-2xl h-10 w-[25%]">Medical</button>
                </button>
                <button className="bg-slate-200 rounded-2xl mt-5">
                    <Image width={200} height={100} src="/image2.jpg" alt=""  className="rounded-2xl flex mx-auto justify-center mt-5" />
                    <p className="font-bold mt-2">
                        Help Poor Children with <br />
                        Cancer to Access Treatment 
                    </p>
                    <p className="mt-2 mr-2 ml-1">
                        Two powerful earthquakes struck Ghana and... <br />
                        $62,786 raised of $85,000 goal
                    </p>
                    <button className="ml-[5%] mt-2 mb-3 bg-slate-400  rounded-2xl h-10 w-[25%]">Medical</button>
                </button>
                <button className="bg-slate-200 rounded-2xl mt-5">
                    <Image width={200} height={100} src="/images7.jpg" alt=""  className="rounded-2xl flex mx-auto justify-center mt-5" />
                    <p className="font-bold mt-2">
                        Provide Gift & food to 700 <br />
                        Street Children
                    </p>
                    <p className="mt-2 mr-2 ml-1">
                        This project will support families in rural and... <br />
                        $54,382 raised of $10,000 goal
                    </p>
                    <button className="ml-[5%] mt-3 bg-slate-400  rounded-2xl h-10 w-[40%]">Food Security</button>
                </button>
            </div>
            <div>
                <h1 className="flex justify-center mt-10">
                    Jion our community for donating and be a part <br />
                    of a positive change in the world. With over:
                </h1>
                <div className="flex justify-between ml-10 mr-10">
                    <Image width={200} height={100} src="/images8.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                    <Image width={200} height={100} src="/image9.jpg" alt=""  className="h-40 w-50 rounded-2xl" />

                </div>
                <p className="flex justify-center font-bold text-lg">120,859+</p>
                <div className="flex justify-between ml-[20%] mr-[20%]">
                <Image width={200} height={100} src="/image10.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                <Image width={200} height={100} src="/image11.jpg" alt=""  className="h-40 w-50 rounded-2xl" />

                </div>
                <p className="flex justify-center font-bold">People alreadey joining</p>
                <div className="flex justify-center mt-5">
                <button className="bg-black text-white rounded-3xl h-10 w-60">Yes, I want to join community</button>

                </div>
            </div>
            <div className="w-[60%] flex flex-col mx-auto justify-center">
                <p className="bg-lime-400 mt-10 h-10 rounded-2xl text-center flex flex-col justify-center">
                    lets help each other*lets help each other*lets help each other
                </p>
                <p className="bg-black mt-2 text-white h-10 rounded-2xl text-center flex flex-col justify-center">
                    lets help each other*lets help each other*lets help each other
                </p>
            </div>
            <div>
                <h1 className="font-bold flex justify-center mt-[7%] text-lg">Meet our team</h1>
                <p className="flex justify-center text-center items-center mt-3">
                    The worlds largest social fundraising platform, optimized <br />
                    for your charity in a more easy way
                </p>
                <div className="flex justify-evenly mt-10">
                    <Image width={200} height={100} src="/image13.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                    <Image width={200} height={100} src="/image15.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                    <Image width={200} height={100} src="/image14.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                    <Image width={200} height={100} src="/image16.jpg" alt=""  className="h-40 w-50 rounded-2xl" />
                </div>
                <div className="flex justify-between mt-5 px-[10%] mr-[5%]"> 
                    <h1 className="font-bold">Mohammed Yussif</h1>
                    <h1 className="font-bold">Destiny Child</h1>
                    <h1 className="font-bold">Wadud Abdulai</h1>
                    <h1 className="font-bold">Fuseini Imoru</h1>
                </div>
                <div className="flex justify-between px-[10%] mr-[4%]">
                    <p>Founder Pracima</p>
                    <p>Product Manager</p>
                    <p>Lead Marketing</p>
                    <p>Creative Designer</p>
                </div>

                <div className="mt-10 bg-lime-100 rounded-3xl ml-5 mr-5 h-[400px] ">
                    <h1 className="flex mx-auto justify-center font-bold text-lg py-5">Frequently asked questions</h1>
                    <p className="flex justify-center mt-3 text-sm">Have another question? Email us at pracima.help@gmail.com</p>

                    <p className="ml-10 mt-10 text-lg">What types of charities can I donate to, and how do I find them?</p>
                    <p className="ml-10 text-sm">There are many types of charities out there, ranging from local organizations to large international ones.</p>
                    <p className="ml-10 text-sm">You can donate to charities that focus on a particular cause, such as animal welfare.</p>

                    <p className="ml-10 mt-3">Is my donation tax-deductible, and how do I claim it on my taxes?</p>
                    <p className="ml-10 mt-3">Can I donate anonymously?</p>
                    <p className="ml-10 mt-3">What percentage of my donation actually goes to the charity for administrative?</p>
                    <p className="ml-10 mt-3">Can I donate goods or services instead of money?</p>
                </div>


                
            </div>
            <footer className="bg-green-950 text-white rounded-3xl ml-5 mr-5 mt-10 h-[300px]">
                <h1 className="font-bold ml-10 py-10">Pracima</h1>
                <p className="ml-5">Great futures are built with a small charity</p>
                <div className="flex justify-end mr-10 space-x-10">
                    <ul>
                        <li>Our Work</li>
                        <li>Our Story</li>
                        <li>Partner with Us</li>
                    </ul>
                    <ul>
                        <li>Donate</li>
                        <li>Careers</li>
                        <li>Internships</li>
                    </ul>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="flex justify-end mt-5 mr-10">
                <button className="bg-green-700 rounded-full h-10 w-[10%]">Donate now</button>

                </div>
                <p className="ml-5 text-sm">@ 2024Copyright, aziemelasari</p>
            </footer>
        </section>
    )
}