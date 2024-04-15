import React from "react";

import { FAQs, Pricing, ScrollCarousel } from "../../components";
import { CheckCircleSVG } from "../../svg";
import { LuLock, LuShieldCheck, LuUnlink } from "react-icons/lu";
import platforms from "../../data/platforms.json";

const PricingPage = () => {
    return (
        <div className="block pricing-page">
            <div className="pricing-title flex items-center flex-col text-center padding-clamp-pricing">
                <h1 className="text-[3rem] font-bold">Select your plan</h1>
            </div>

            <div className="pricing-plan p-6 flex flex-col items-center justify-center">
                <Pricing />

                <p className="my-2">*Free users have a max allowance of 3 downloads, topped up by 1 each month.</p>
                <p>**Micro organizations are classified as having 5 employees or less.</p>
            </div>

            <div className="pricing-payments padding-clamp-payments">
                <div className="payments-pill flex flex-wrap items-center justify-center gap-4 px-[3rem]">
                    <div className="text-[#cdd2d1] flex items-center text-[0.8rem]">
                        <CheckCircleSVG />
                        <div className="flex-1 text-center px-2">Safe for monetization</div>
                    </div>
                    <div className="text-[#cdd2d1] flex items-center text-[0.8rem]">
                        <CheckCircleSVG />
                        <div className="flex-1 text-center px-2">New music added daily</div>
                    </div>
                    <div className="text-[#cdd2d1] flex items-center text-[0.8rem]">
                        <CheckCircleSVG />
                        <div className="flex-1 text-center px-2">Copyright-free</div>
                    </div>
                </div>

                <div className="payments-info flex justify-center p-8">
                    <div
                        className="payment-info-section border-r border-[#4e5152]
                    flex flex-col justify-start px-8 max-w-[20rem]"
                    >
                        <div className="payment-info-header flex items-center font-medium mb-2 text-[0.825rem] gap-2 text-[#A1A8AA]">
                            <LuShieldCheck size={20} />
                            <span>Payment Methods</span>
                        </div>
                        <div className="payment-info-body flex gap-1 text-[0.8rem]">
                            <img className="max-w-12 max-h-8 mt-1" src="visa.png" />
                            <img className="max-w-12 max-h-8 mt-1" src="mastercard.png" />
                            <img className="max-w-12 max-h-8 mt-1" src="amex.png" />
                        </div>
                    </div>

                    <div
                        className="payment-info-section border-r border-[#4e5152]
                    flex flex-col justify-start px-8 max-w-[20rem]"
                    >
                        <div className="payment-info-header flex items-center font-medium mb-2 text-[0.825rem] gap-2 text-[#A1A8AA]">
                            <LuUnlink size={20} />
                            <span>Cancel Anytime</span>
                        </div>
                        <div className="payment-info-body flex gap-1 text-[0.7rem] text-[#A1A8AA]">
                            <p>No tie-ins, just simple plans which you can cancel at any time.</p>
                        </div>
                    </div>

                    <div
                        className="payment-info-section]
                    flex flex-col justify-start px-8 max-w-[20rem]"
                    >
                        <div className="payment-info-header flex items-center font-medium mb-2 text-[0.825rem] gap-2 text-[#A1A8AA]">
                            <LuLock size={20} />
                            <span>Secure Payment</span>
                        </div>
                        <div className="payment-info-body flex gap-1 text-[0.7rem] text-[#A1A8AA]">
                            <p>Transactions are encrypted and secured.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing-platforms flex flex-col justify-center items-center padding-clamp-platform">
                <h2 className="text-[1.9rem] mb-[2rem]">
                    Safe for
                    <span className="text-[#71B190]"> all your platforms</span>
                </h2>
                <ScrollCarousel photos={platforms.map((item) => item.img)} />
            </div>

            <div className="pricing-faqs w-[70%] mx-auto flex flex-col items-center justify-center padding-clamp-platform">
                <h2 className="text-[1.9rem] mb-[2rem]">FAQs</h2>
                <FAQs />
            </div>
        </div>
    );
};

export default PricingPage;
