import React from 'react';
import team1 from '../../../assets/images/team1.png';
import team2 from '../../../assets/images/team2.png';
import team3 from '../../../assets/images/team3.png';
import team4 from '../../../assets/images/team4.png';
import InfoCard from './InfoCard';

const InfoCards = () => {

    return (
        <section className='hero max-w-[1440px] mx-auto mt-10'>
            <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div
                    class="hero-content grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                    <div class=" grid grid-cols-2  gap-4 sm:grid-cols-2">
                        <a
                            class="block rounded-xl   "
                            href="/accountant"
                        >
                            <img src={team1} alt="" />
                        </a>

                        <a
                            class="block rounded-xl   "
                            href="/accountant"
                        >
                            <img src={team2} alt="" />

                        </a>

                        <a
                            class="block rounded-xl  "
                            href="/accountant"
                        >
                            <img src={team3} alt="" />

                        </a>

                        <a
                            class="block rounded-xl   "
                            href="/accountant"
                        >
                            <img src={team4} alt="" />
                        </a>
                    </div>
                    <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                        <h2 class="text-3xl sm:text-4xl">Quick list <strong>of Our</strong> <br /> <strong className=' text-primary'>Features</strong></h2>

                        <p class="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                            Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                            Obcaecati, autem.
                        </p>

                        <a
                            class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            href="/get-started"
                        >
                            <span class="text-sm font-medium"> Explore More </span>

                            <svg
                                class="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default InfoCards;