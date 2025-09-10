const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-gray-300 text-sm py-6">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="md:hidden">
                    <div className="flex flex-col justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-extrabold text-yellow-500 mb-4">LANDAS</h2>
                        </div>
                        <div className="text-left space-y-2">
                            <h3 className="font-semibold mb-2 text-white text-xs">대표 번호 및 AS 문의</h3>
                            <p className="text-xl font-bold text-white mb-1">1661-6244</p>
                        </div>
                    </div>

                    <div className="space-y-1 text-xs mb-4 text-neutral-400">
                        <p>평일 : 09:00 - 18:00</p>
                        <p>기업 : 기업은행</p>
                        <p>계좌번호 : 213-111127-04-035</p>
                        <p>예금주 : (주)랜드스</p>
                        <div className="mt-4 space-y-1">
                            <p>대표이사 : 강장진</p>
                            <p>사업자등록번호 : 201-86-15245</p>
                            <p>서울특별시 중구 다산로 139 (랜드스빌딩) 2층</p>
                            <p>통신판매업신고 : 중구 제0575호</p>
                            <p>개인정보보호책임자 : 최주연</p>
                        </div>
                    </div>

                    {/* Social links and legal */}
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="flex space-x-4">
                            <a href="#"><img src="/Instagram.png" className="w-4 h-4" alt="Instagram" /></a>
                            <a href="#"><img src="/Facebook.png" className="w-4 h-4" alt="Facebook" /></a>
                            <a href="#"><img src="/YouTube.png" className="w-4 h-4" alt="YouTube" /></a>
                        </div>
                        <div className="flex space-x-4 text-xs text-neutral-500">
                            <a href="#" className="hover:text-white">개인정보처리방침</a>
                            <a href="#" className="hover:text-white">이용약관</a>
                        </div>
                    </div>

                    <p className="text-xs text-neutral-500 mt-2 text-center">
                        Copyright © WWW.ldsb2bmall.com All right reserved
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-5 gap-8">
                    <div className="flex flex-col col-span-2 gap-4">
                        <h2 className="text-4xl font-extrabold text-yellow-500 mb-4">LANDAS</h2>
                        <p>대표이사 : 강장진</p>
                        <p>사업자등록번호 : 201-86-15245</p>
                        <p>서울특별시 중구 다산로 139 (랜드스빌딩) 6층</p>
                        <p>통신판매업신고 : 중구 제0575호</p>
                        <p>개인정보보호책임자 : 최주연</p>
                        <p className="text-xs text-gray-300">
                            Copyright © WWW.ldsb2bmall.com All right reserved
                        </p>
                    </div>
                    <div className="col-start-4">
                        <h3 className="font-semibold mb-2 text-white">대표 번호 및 AS 문의</h3>
                        <p className="text-2xl font-bold text-white mb-4">1661-6244</p>
                        <p>평일 : 09:00 - 18:00</p>
                        <p>기업 : 기업은행</p>
                        <p>계좌번호 : 213-111127-04-035</p>
                        <p>예금주 : (주)랜드스</p>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex space-x-6 text-neutral-500">
                            <a href="#" className="hover:text-white">개인정보처리방침</a>
                            <a href="#" className="hover:text-white">이용약관</a>
                        </div>
                        <div className="flex space-x-4 text-xl">
                            <a href="#"><img src="/Instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="/Facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="/YouTube.png" alt="YouTube" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;