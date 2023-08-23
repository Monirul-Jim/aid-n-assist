"use client"
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import Faq from "@/components/FAQ/Faq";


const page = () => {
    return (
        <>
        {/* banner part faq section */}
            <CommonBanner PageTittle={'frequently ask'} color={'question'}></CommonBanner>
            <Faq></Faq>
        </>
    );
};

export default page;