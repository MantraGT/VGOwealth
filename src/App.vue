<template>
  <div id="app" class="app-layout">
    <!-- Custom Sidebar -->
    <Sidebar :isCollapsed="isSidebarCollapsed" @toggle="handleSidebarToggle" />

    <div class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <Header @toggle-sidebar="handleHeaderToggle" />
      <main class="main-container">
        <div class="w-full min-h-screen py-6 px-4 lg:p-8">
          <div class="w-full max-w-[1168px] mx-auto">
            <div class="w-full flex flex-row">
              <div class="w-full lg:w-full-50-4 lg:mr-8">
                <div class="w-full">
                  <div
                    class="w-full bg-white-default rounded-2xl lg:min-h-57-5 overflow-hidden pt-full-228-568 relative"
                  >
                    <div class="absolute-full">
                      <div class="w-full h-full">
                        <span id="carousel_prev_jm62oh433vk" style=""></span>
                        <div
                          id="carousel_3r2lo1l3w4z"
                          class="owl-carousel owl-theme owl-loaded owl-drag"
                        >
                          <div class="owl-stage-outer">
                            <div
                              class="owl-stage"
                              style="
                                transform: translate3d(-568px, 0px, 0px);
                                transition: 0.25s;
                                width: 2272px;
                              "
                            >
                              <div class="owl-item" style="width: 568px">
                                <div class="w-full inline-block cursor-pointer">
                                 <div class="w-full pt-full-228-568 lg:min-h-57-5 relative">
                                    <img
                                      
                                      src="./assets/login2.png"
                                      alt="login2"
                                      class="absolute-full object-cover lazyLoad"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="owl-item active" style="width: 568px">
                                <div class="w-full inline-block cursor-pointer">
                                  <div class="w-full pt-full-228-568 lg:min-h-57-5 relative">
                                    <img
                                      
                                      src="./assets/login2.png"
                                      alt="login2"
                                      class="absolute-full object-cover lazyLoad"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="owl-item" style="width: 568px">
                                <div class="w-full inline-block cursor-pointer">
                                  <div class="w-full pt-full-228-568 lg:min-h-57-5 relative">
                                    <img
                                      
                                      src="./assets/login2.png"
                                      alt="login2"
                                      class="absolute-full object-cover lazyLoad"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="owl-item" style="width: 568px">
                                <div class="w-full inline-block cursor-pointer">
                                  <div class="w-full pt-full-228-568 lg:min-h-57-5 relative">
                                    <img
                                      
                                      src="./assets/login2.png"
                                      alt="login2"
                                      class="absolute-full object-cover lazyLoad"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="owl-nav disabled">
                            <div class="owl-prev">next</div>
                            <div class="owl-next">prev</div>
                          </div>
                          <div class="owl-dots disabled"></div>
                        </div>
                        <span id="carousel_next_wjmjai43hr"></span>
                      </div>
                    </div>
                    <span
                      class="px-3 h-6 rounded-lg bg-black-262-60 absolute left-2 bottom-2 text-xs-12-16 text-white-default font-medium z-10 grid-center"
                      >2/4</span
                    >
                    <div class="w-max flex-row-center absolute right-2 bottom-2 z-10">
                      <div class="p-1 rounded-lg bg-black-262-60 mr-2">
                        <img
                          src="https://media.topi.vn/svgs/short-left-white.svg"
                          alt="short-left-white"
                          class="cursor-pointer w-4 h-4"
                        />
                      </div>
                      <div class="p-1 rounded-lg bg-black-262-60">
                        <img
                          src="https://media.topi.vn/svgs/short-right-white.svg"
                          alt="short-right-white"
                          class="cursor-pointer w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full-50-4 h-full hidden lg:block">
                <a
                  href="/login"
                  class="w-full block bg-white-default rounded-2xl overflow-hidden pt-full-228-568 lg:min-h-57-5 relative"
                  ><img
                    src="./assets/login.png"
                    alt="banner-register"
                    class="cursor-pointer absolute-full"
                /></a>
              </div>
            </div>
            <!---->
            <div class="w-full px-6 py-4 bg-white-default rounded-3xl mt-4 lg:mt-8">
              <div class="w-full flex flex-col lg:flex-row lg:items-center">
                <h3 class="text-lg-18-26 w-max text-black-default font-medium">Đầu tư cùng VGO</h3>
                <div class="w-full lg:w-max mt-4 lg:ml-4 lg:mt-0 overflow-x-auto hide-scrollbar">
                  <div class="w-max">
                    <button
                      class="w-max px-3 h-8 border mr-2 last:mr-0 rounded-lg text-sm font-medium inline-block float-left bg-black-262 border-black-262 text-white-default"
                    >
                      Tích lũy</button
                    ><button
                      class="w-max px-3 h-8 border mr-2 last:mr-0 rounded-lg text-sm font-medium inline-block float-left bg-white-default border-f2f text-black-262"
                    >
                      Chứng chỉ quỹ</button
                    ><button
                      class="w-max px-3 h-8 border mr-2 last:mr-0 rounded-lg text-sm font-medium inline-block float-left bg-white-default border-f2f text-black-262"
                    >
                      Vàng</button
                    ><button
                      class="w-max px-3 h-8 border mr-2 last:mr-0 rounded-lg text-sm font-medium inline-block float-left bg-white-default border-f2f text-black-262"
                    >
                      Cổ phiếu
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-full mt-4">
                <div class="w-full bg-white-default shadow-24 rounded-2xl p-4">
                  <div class="w-full">
                    <div class="w-full h-full carousel-invest-item">
                      <span id="carousel_prev_rionpfok8is" style="display: none"></span>
                      <div
                        id="carousel_2erz50ws9xs"
                        class="owl-carousel owl-theme owl-loaded owl-drag"
                      >
                        <div class="owl-stage-outer">
                          <div
                            class="owl-stage"
                            style="
                              transform: translate3d(0px, 0px, 0px);
                              transition: all;
                              width: 3240px;
                            "
                          >
                            <div
                              v-for="(term, index) in investmentTerms"
                              :key="term.id"
                              :class="['owl-item', { active: index === 0 }]"
                              style="width: auto; margin-right: 16px"
                            >
                              <div class="w-50">
                                <a
                                  :href="`/assets/accumulation?type=list&p=${term.id}`"
                                  class="w-full inline-block bg-linear-border-invest rounded-2xl p-0-25"
                                >
                                  <div class="w-full bg-white-default rounded-2xl">
                                    <div class="w-full bg-linear-invest-item rounded-2xl p-3">
                                      <div class="w-full flex-row-center">
                                        <div class="w-8 h-8 mr-2 overflow-hidden">
                                          <img
                                            :src="term.image"
                                            :alt="term.name"
                                            class="wh-full lazyLoad isLoaded"
                                          />
                                        </div>
                                        <div class="flex flex-col justify-center flex-1">
                                          <p class="text-xs text-black-808 font-medium">Tích lũy</p>
                                          <p class="text-xs text-black-808 font-bold">
                                            {{ term.name }}
                                          </p>
                                        </div>
                                      </div>
                                      <div class="w-full flex-row-center justify-between mt-4">
                                        <div class="flex-row-center flex flex-1">
                                          <p class="text-sm text-d88 font-bold">
                                            {{ term.rate }}%/năm
                                          </p>
                                        </div>
                                        <div class="w-6 h-6 ml-2">
                                          <img
                                            src="https://media.topi.vn/svgs/view-more-item.svg"
                                            alt="view-more-item"
                                            class="cursor-pointer wh-full"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="owl-nav">
                          <div class="owl-prev">
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="40"
                                y="40"
                                width="40"
                                height="40"
                                rx="20"
                                transform="rotate(-180 40 40)"
                                fill="url(#paint0_linear_2105_22682)"
                              ></rect>
                              <path
                                d="M21.5 12.5L15.5 20L21.5 27.5"
                                stroke="#D88520"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2105_22682"
                                  x1="40"
                                  y1="40"
                                  x2="80"
                                  y2="78.0952"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#F9EFD7"></stop>
                                  <stop offset="0.276042" stop-color="#FFEDC0"></stop>
                                  <stop offset="0.739583" stop-color="#FFF7DA"></stop>
                                  <stop offset="1" stop-color="#F3EAD2"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div class="owl-next">
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="40"
                                height="40"
                                rx="20"
                                fill="url(#paint0_linear_2105_22677)"
                              ></rect>
                              <path
                                d="M18.5 27.5L24.5 20L18.5 12.5"
                                stroke="#D88520"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2105_22677"
                                  x1="0"
                                  y1="0"
                                  x2="40"
                                  y2="38.0952"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#F9EFD7"></stop>
                                  <stop offset="0.276042" stop-color="#FFEDC0"></stop>
                                  <stop offset="0.739583" stop-color="#FFF7DA"></stop>
                                  <stop offset="1" stop-color="#F3EAD2"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div class="owl-dots disabled"></div>
                      </div>
                      <span id="carousel_next_t807rpvf3qc"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-2 flex flex-row justify-end">
                <!---->
                <a href="/assets/accumulation?type=list" class="flex-row-center">
                  <p class="text-xs text-f7b font-bold">Xem tất cả</p>
                  <div class="w-4 h-4 ml-1">
                    <img
                      src="https://media.topi.vn/svgs/arrow-view-more.svg"
                      alt="arrow-view-more"
                      class="cursor-pointer wh-full"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div class="w-full flex flex-row flex-wrap mt-4 lg:mt-8">
              <div
                class="market-index-item px-3 py-4 lg:p-6 bg-white-default rounded-3xl cursor-pointer"
              >
                <div class="w-full flex flex-row justify-between lg:justify-start">
                  <div class="flex flex-1 lg:w-max">
                    <p class="text-xs-12-16 text-black-808 mr-1 title-market">
                      CHỈ SỐ TÂM LÝ VN-INDEX
                    </p>
                  </div>
                  <img
                    src="https://media.topi.vn/svgs/short-right.svg"
                    alt="short-right"
                    class="cursor-pointer w-4 h-4 ml-2"
                  />
                </div>
                <p
                  class="text-xs min-h-8 sm:min-h-4 lg:min-h-5 mt-1 lg:text-sm text-black-262 font-medium lg:mt-2"
                >
                  Dự đoán cho phiên 01/08/2025
                </p>
                <div class="w-full mt-4 lg:mt-6 grid-center">
                  <div class="w-full relative max-w-[220px]">
                    <div class="w-full relative pt-[50%] flex flex-col items-center justify-center">
                      <img
                        src="https://media.topi.vn/svgs/bg-market-index.svg"
                        alt="bg-market-index"
                        class="cursor-pointer absolute-full"
                      />
                      <div class="absolute bottom-0 flex flex-col items-center">
                        <p class="text-base lg:text-2xl mt-2-5 font-bold text-tham-lam-cuc-do">
                          79
                        </p>
                        <p
                          class="text-xs lg:text-sm text-black-262 font-medium text-tham-lam-cuc-do"
                        >
                          Tham lam cực độ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="market-index-item px-3 py-4 lg:p-6 bg-white-default rounded-3xl cursor-pointer"
              >
                <div class="w-full flex flex-row justify-between lg:justify-start">
                  <div class="flex flex-1 lg:w-max">
                    <p class="text-xs-12-16 text-black-808 mr-1 title-market">Vàng</p>
                  </div>
                  <img
                    src="https://media.topi.vn/svgs/short-right.svg"
                    alt="short-right"
                    class="cursor-pointer w-4 h-4 ml-2"
                  />
                </div>
                <p
                  class="text-xs min-h-8 sm:min-h-4 lg:min-h-5 mt-1 lg:text-sm text-black-262 font-medium lg:mt-2"
                >
                  SJC
                </p>
                <div class="w-full h-[88px] lg:h-[112px] mt-4 lg:mt-6">
                  <div
                    class="w-full p-1 lg:p-2 flex flex-col items-center lg:flex-row lg:justify-between mb-2 last:mb-0 rounded-lg"
                    style="
                      background: linear-gradient(
                        133.6deg,
                        rgb(249, 239, 215) 0%,
                        rgb(255, 237, 192) 26.96%,
                        rgb(255, 247, 218) 72.24%,
                        rgb(243, 234, 210) 97.68%
                      );
                    "
                  >
                    <div class="flex flex-col items-center">
                      <p class="text-xs-12-16 text-black-262 lg:text-black-808 font-medium">
                        Mua (đ/lượng)
                      </p>
                      <p class="text-xs-12-16 h-4 lg:h-5 lg:text-sm font-bold text-black-262">
                        121.500.000
                      </p>
                    </div>
                    <div class="w-8 h-8 hidden lg:block">
                      <img
                        src="https://media.topi.vn/images/gold-buy.png"
                        alt="gold-buy"
                        class="cursor-pointer wh-full"
                      />
                    </div>
                  </div>
                  <div
                    class="w-full p-1 lg:p-2 flex flex-col items-center lg:flex-row lg:justify-between mb-2 last:mb-0 rounded-lg"
                    style="background: rgb(242, 242, 242)"
                  >
                    <div class="flex flex-col items-center">
                      <p class="text-xs-12-16 text-black-262 lg:text-black-808 font-medium">
                        Bán (đ/lượng)
                      </p>
                      <p class="text-xs-12-16 h-4 lg:h-5 lg:text-sm font-bold text-black-262">
                        123.500.000
                      </p>
                    </div>
                    <div class="w-8 h-8 hidden lg:block">
                      <img
                        src="https://media.topi.vn/images/gold-buy.png"
                        alt="gold-buy"
                        class="cursor-pointer wh-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="market-index-item px-3 py-4 lg:p-6 bg-white-default rounded-3xl cursor-pointer"
              >
                <div class="w-full flex flex-row justify-between lg:justify-start">
                  <div class="flex flex-1 lg:w-max">
                    <p class="text-xs-12-16 text-black-808 mr-1 title-market">LÃI SUẤT CAO NHẤT</p>
                  </div>
                  <img
                    src="https://media.topi.vn/svgs/short-right.svg"
                    alt="short-right"
                    class="cursor-pointer w-4 h-4 ml-2"
                  />
                </div>
                <p
                  class="text-xs min-h-8 sm:min-h-4 lg:min-h-5 mt-1 lg:text-sm text-black-262 font-medium lg:mt-2"
                >
                  Ngân hàng thương mại lớn
                </p>
                <div class="w-full h-[88px] lg:h-[112px] mt-4 lg:mt-6">
                  <div
                    class="w-full p-1 lg:p-2 flex flex-col items-center lg:flex-row lg:justify-between mb-2 last:mb-0 rounded-lg"
                    style="background: rgba(74, 217, 174, 0.1)"
                  >
                    <div class="flex flex-col items-center">
                      <p class="text-xs-12-16 text-black-262 lg:text-black-808 font-medium">
                        Lãi suất
                      </p>
                      <p class="text-xs-12-16 h-4 lg:h-5 lg:text-sm font-bold text-[#4AD9AE]">
                        5.43%
                      </p>
                    </div>
                    <div class="w-8 h-8 hidden lg:block">
                      <img
                        src="https://media.topi.vn/images/interest-date-value.png"
                        alt="interest-date-value"
                        class="cursor-pointer wh-full"
                      />
                    </div>
                  </div>
                  <div
                    class="w-full p-1 lg:p-2 flex flex-col items-center lg:flex-row lg:justify-between mb-2 last:mb-0 rounded-lg"
                    style="
                      background: linear-gradient(
                        133.6deg,
                        rgb(255, 224, 217) 0%,
                        rgb(255, 235, 224) 26.96%,
                        rgb(255, 229, 218) 72.24%,
                        rgb(255, 238, 211) 97.68%
                      );
                    "
                  >
                    <div class="flex flex-col items-center">
                      <p class="text-xs-12-16 text-black-262 lg:text-black-808 font-medium">
                        Kỳ hạn
                      </p>
                      <p class="text-xs-12-16 h-4 lg:h-5 lg:text-sm font-bold text-[#D88520]">
                        24 tháng
                      </p>
                    </div>
                    <div class="w-8 h-8 hidden lg:block">
                      <img
                        src="https://media.topi.vn/images/interest-date-term.png"
                        alt="interest-date-term"
                        class="cursor-pointer wh-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="market-index-item px-3 py-4 lg:p-6 bg-white-default rounded-3xl cursor-pointer"
              >
                <div class="w-full flex flex-row justify-between lg:justify-start">
                  <div class="flex flex-1 lg:w-max">
                    <p class="text-xs-12-16 text-black-808 mr-1 title-market">TỶ GIÁ USD/VND</p>
                  </div>
                  <img
                    src="https://media.topi.vn/svgs/short-right.svg"
                    alt="short-right"
                    class="cursor-pointer w-4 h-4 ml-2"
                  />
                </div>
                <p
                  class="text-xs min-h-8 sm:min-h-4 lg:min-h-5 mt-1 lg:text-sm text-black-262 font-medium lg:mt-2"
                >
                  Ngân hàng thương mại
                </p>
                <div class="w-full h-[88px] lg:h-[112px] mt-4 lg:mt-6">
                  <div
                    class="w-full p-1 lg:p-2 flex flex-col items-center lg:flex-row lg:justify-between mb-2 last:mb-0 rounded-lg"
                    style="
                      background: linear-gradient(
                        133.6deg,
                        rgb(249, 239, 215) 0%,
                        rgb(255, 237, 192) 26.96%,
                        rgb(255, 247, 218) 72.24%,
                        rgb(243, 234, 210) 97.68%
                      );
                    "
                  >
                    <div class="flex flex-col items-center">
                      <p class="text-xs-12-16 text-black-262 lg:text-black-808 font-medium">
                        Mua (USD/VND)
                      </p>
                      <p class="text-xs-12-16 h-4 lg:h-5 lg:text-sm font-bold text-black-262">
                        25.990
                      </p>
                    </div>
                    <div class="w-8 h-8 hidden lg:block">
                      <img
                        src="https://media.topi.vn/images/usd-rate-buy.png"
                        alt="usd-rate-buy"
                        class="cursor-pointer wh-full"
                      />
                    </div>
                  </div>
                  <div
                    class="w-full p-1 lg:p-2 flex flex-col items-center lg:flex-row lg:justify-between mb-2 last:mb-0 rounded-lg"
                    style="background: rgb(242, 242, 242)"
                  >
                    <div class="flex flex-col items-center">
                      <p class="text-xs-12-16 text-black-262 lg:text-black-808 font-medium">
                        Bán (USD/VND)
                      </p>
                      <p class="text-xs-12-16 h-4 lg:h-5 lg:text-sm font-bold text-black-262">
                        26.380
                      </p>
                    </div>
                    <div class="w-8 h-8 hidden lg:block">
                      <img
                        src="https://media.topi.vn/images/usd-rate-sell.png"
                        alt="usd-rate-sell"
                        class="cursor-pointer wh-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-6 bg-white-default rounded-2xl mt-4 lg:mt-8">
              <div class="w-full">
                <div class="w-full">
                  <div class="w-full h-full carousel-invest-item carousel-report">
                    <span id="carousel_prev_h1sq6t0bmkg" style="display: none"></span>
                    <div
                      id="carousel_29rfpdognoj"
                      class="owl-carousel owl-theme owl-loaded owl-drag"
                    >
                      <div class="owl-stage-outer">
                        <div
                          class="owl-stage"
                          style="
                            transform: translate3d(0px, 0px, 0px);
                            transition: all;
                            width: 1920px;
                          "
                        >
                          <div class="owl-item active" style="width: auto; margin-right: 16px">
                            <a
                              href="/market/bao-cao-phan-tich/"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 relative overflow-hidden !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="absolute-full">
                                <img
                                  src="https://media.topi.vn/images/view-more-report.png"
                                  alt="view-more-report"
                                  class="cursor-pointer w-full h-full object-cover"
                                />
                                <div class="absolute bottom-3 left-3 flex flex-col">
                                  <p
                                    class="white-space-break-spaces text-2xl text-[#4078BA] font-medium uppercase"
                                  >
                                    Báo cáo Phân tích
                                  </p>
                                  <div
                                    class="w-max h-7 mt-2 flex-row-center px-2 bg-[#DBF8FF] rounded-full"
                                  >
                                    <p class="text-sm w-max text-[#357EC2] font-medium">Xem thêm</p>
                                    <img
                                      src="https://media.topi.vn/svgs/view-more-report.svg"
                                      alt="view-more-report"
                                      class="cursor-pointer !w-4 !h-4 ml-1"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="w-full flex flex-col">
                                <div
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                >
                                  <div></div>
                                </div>
                                <div class="w-full h-15 mt-2">
                                  <div></div>
                                </div>
                                <div class="w-12 h-0-25 mt-4 lg:mt-6"></div>
                                <div
                                  class="w-full h-4 mt-4 flex flex-row items-center justify-between"
                                >
                                  <div></div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="owl-item active" style="width: auto; margin-right: 16px">
                            <a
                              target="_self"
                              href="https://online.topi.vn/chinh-phu-a-hanh-ong-con-ban-a-san-sang-chua"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="w-full flex flex-col">
                                <p
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                  style="background: rgb(236, 224, 255); color: rgb(140, 73, 206)"
                                >
                                  Ngành
                                </p>
                                <div class="w-full h-15 mt-2">
                                  <p
                                    class="text-xs text-black-808 font-medium mb-1 t-ellipsis-1"
                                  ></p>
                                  <div class="w-full h-10">
                                    <p class="text-sm text-black-262 t-ellipsis-2">
                                      Chính phủ đã hành động – còn bạn đã sẵn sàng chưa?
                                    </p>
                                  </div>
                                </div>
                                <div class="w-12 h-0-25 bg-ffc mt-4 lg:mt-6"></div>
                                <div class="w-full mt-4 flex flex-row items-center justify-between">
                                  <p class="text-xs text-black-808 font-medium">YUANTA</p>
                                  <p class="text-xs text-black-808 font-medium">18/06/2025</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="owl-item active" style="width: auto; margin-right: 16px">
                            <a
                              target="_self"
                              href="https://online.topi.vn/kqkd-q3-fy2025-vuot-ky-vong"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="w-full flex flex-col">
                                <p
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                  style="background: rgb(219, 248, 255); color: rgb(53, 126, 194)"
                                >
                                  Chiến lược
                                </p>
                                <div class="w-full h-15 mt-2">
                                  <!---->
                                  <div class="w-full h-10">
                                    <p class="text-sm text-black-262 t-ellipsis-2">
                                      KQKD Q3 FY2025 vượt kỳ vọng
                                    </p>
                                  </div>
                                </div>
                                <div class="w-12 h-0-25 bg-ffc mt-4 lg:mt-6"></div>
                                <div class="w-full mt-4 flex flex-row items-center justify-between">
                                  <p class="text-xs text-black-808 font-medium">KBSV</p>
                                  <p class="text-xs text-black-808 font-medium">18/06/2025</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="owl-item active" style="width: auto; margin-right: 16px">
                            <a
                              target="_self"
                              href="https://online.topi.vn/ay-nhanh-qua-trinh-dich-chuyen-sang-thuong-mai-hien-ai"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="w-full flex flex-col">
                                <p
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                  style="background: rgb(236, 224, 255); color: rgb(140, 73, 206)"
                                >
                                  Ngành
                                </p>
                                <div class="w-full h-15 mt-2">
                                  <p
                                    class="text-xs text-black-808 font-medium mb-1 t-ellipsis-1"
                                  ></p>
                                  <div class="w-full h-10">
                                    <p class="text-sm text-black-262 t-ellipsis-2">
                                      Đẩy nhanh quá trình dịch chuyển sang thương mại hiện đại
                                    </p>
                                  </div>
                                </div>
                                <div class="w-12 h-0-25 bg-ffc mt-4 lg:mt-6"></div>
                                <div class="w-full mt-4 flex flex-row items-center justify-between">
                                  <p class="text-xs text-black-808 font-medium">SSI</p>
                                  <p class="text-xs text-black-808 font-medium">18/06/2025</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="owl-item active" style="width: auto; margin-right: 16px">
                            <a
                              target="_self"
                              href="https://online.topi.vn/duy-tri-vi-the-au-nganh-huong-loi-tu-chu-ky-thuan-nganh-phan-bon"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="w-full flex flex-col">
                                <p
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                  style="background: rgb(219, 248, 255); color: rgb(53, 126, 194)"
                                >
                                  Chiến lược
                                </p>
                                <div class="w-full h-15 mt-2">
                                  <!---->
                                  <div class="w-full h-10">
                                    <p class="text-sm text-black-262 t-ellipsis-2">
                                      Duy trì vị thế đầu ngành, hưởng lợi từ chu kỳ thuận ngành phân
                                      bón
                                    </p>
                                  </div>
                                </div>
                                <div class="w-12 h-0-25 bg-ffc mt-4 lg:mt-6"></div>
                                <div class="w-full mt-4 flex flex-row items-center justify-between">
                                  <p class="text-xs text-black-808 font-medium">Vietcap</p>
                                  <p class="text-xs text-black-808 font-medium">18/06/2025</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="owl-item" style="width: auto; margin-right: 16px">
                            <a
                              target="_self"
                              href="https://online.topi.vn/cap-nhat-hsg"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="w-full flex flex-col">
                                <p
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                  style="background: rgb(219, 248, 255); color: rgb(53, 126, 194)"
                                >
                                  Chiến lược
                                </p>
                                <div class="w-full h-15 mt-2">
                                  <!---->
                                  <div class="w-full h-10">
                                    <p class="text-sm text-black-262 t-ellipsis-2">Cập nhật HSG</p>
                                  </div>
                                </div>
                                <div class="w-12 h-0-25 bg-ffc mt-4 lg:mt-6"></div>
                                <div class="w-full mt-4 flex flex-row items-center justify-between">
                                  <p class="text-xs text-black-808 font-medium">SSI</p>
                                  <p class="text-xs text-black-808 font-medium">17/06/2025</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="owl-item" style="width: auto; margin-right: 16px">
                            <a
                              target="_self"
                              href="https://online.topi.vn/nganh-o-to-cap-nhat"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="w-full flex flex-col">
                                <p
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                  style="background: rgb(236, 224, 255); color: rgb(140, 73, 206)"
                                >
                                  Ngành
                                </p>
                                <div class="w-full h-15 mt-2">
                                  <p
                                    class="text-xs text-black-808 font-medium mb-1 t-ellipsis-1"
                                  ></p>
                                  <div class="w-full h-10">
                                    <p class="text-sm text-black-262 t-ellipsis-2">
                                      Ngành Ô tô - Cập nhật
                                    </p>
                                  </div>
                                </div>
                                <div class="w-12 h-0-25 bg-ffc mt-4 lg:mt-6"></div>
                                <div class="w-full mt-4 flex flex-row items-center justify-between">
                                  <p class="text-xs text-black-808 font-medium">VISRating</p>
                                  <p class="text-xs text-black-808 font-medium">17/06/2025</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="owl-item" style="width: auto; margin-right: 16px">
                            <a
                              target="_self"
                              href="https://online.topi.vn/noi-ia-duy-tri-tang-truong-trong-boi-canh-the-gioi-ay-thach-thuc"
                              class="report-item inline-block cursor-pointer p-3 rounded-lg border border-f2f mb-4 !w-[224px] !mr-0 !mb-0 !rounded-2xl"
                            >
                              <div class="w-full flex flex-col">
                                <p
                                  class="w-max grid-center px-2 h-6 rounded-full text-xs font-bold"
                                  style="background: rgb(255, 241, 228); color: rgb(185, 126, 37)"
                                >
                                  Vĩ mô tiền tệ
                                </p>
                                <div class="w-full h-15 mt-2">
                                  <!---->
                                  <div class="w-full h-10">
                                    <p class="text-sm text-black-262 t-ellipsis-2">
                                      Nội địa duy trì tăng trưởng trong bối cảnh thế giới đầy thách
                                      thức
                                    </p>
                                  </div>
                                </div>
                                <div class="w-12 h-0-25 bg-ffc mt-4 lg:mt-6"></div>
                                <div class="w-full mt-4 flex flex-row items-center justify-between">
                                  <p class="text-xs text-black-808 font-medium">SSV</p>
                                  <p class="text-xs text-black-808 font-medium">17/06/2025</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="owl-nav">
                        <div class="owl-prev disabled">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="40"
                              y="40"
                              width="40"
                              height="40"
                              rx="20"
                              transform="rotate(-180 40 40)"
                              fill="url(#paint0_linear_2105_22682)"
                            ></rect>
                            <path
                              d="M21.5 12.5L15.5 20L21.5 27.5"
                              stroke="#D88520"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_2105_22682"
                                x1="40"
                                y1="40"
                                x2="80"
                                y2="78.0952"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#F9EFD7"></stop>
                                <stop offset="0.276042" stop-color="#FFEDC0"></stop>
                                <stop offset="0.739583" stop-color="#FFF7DA"></stop>
                                <stop offset="1" stop-color="#F3EAD2"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div class="owl-next">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="20"
                              fill="url(#paint0_linear_2105_22677)"
                            ></rect>
                            <path
                              d="M18.5 27.5L24.5 20L18.5 12.5"
                              stroke="#D88520"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_2105_22677"
                                x1="0"
                                y1="0"
                                x2="40"
                                y2="38.0952"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#F9EFD7"></stop>
                                <stop offset="0.276042" stop-color="#FFEDC0"></stop>
                                <stop offset="0.739583" stop-color="#FFF7DA"></stop>
                                <stop offset="1" stop-color="#F3EAD2"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="owl-dots disabled"></div>
                    </div>
                    <span id="carousel_next_4d10mhx7uvj"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, nextTick } from 'vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// Add jQuery to window for plugins that expect it there
if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  
  // Import OwlCarousel after jQuery is set up
  import('owl.carousel/dist/owl.carousel.min.js').then(() => {
    console.log('OwlCarousel loaded');
  });
}

interface InvestmentProduct {
  id: string;
  name: string;
  rate: string;
  image: string;
}

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  setup() {
    // Reactive state
    const isSidebarCollapsed = ref(false);
    const isMobile = ref(false);
    const investmentTerms = ref<InvestmentProduct[]>([
      {
        id: '1EOe',
        name: 'Tích luỹ linh hoạt',
        rate: '7.2',
        image: 'https://cdn.topi.vn/product/641282dc04e68f6f602ee68ec861c80b.png',
      },
      {
        id: '1NWZ',
        name: 'Không kỳ hạn',
        rate: '4.8',
        image: 'https://cdn.topi.vn/product/5da3cfebd47f35e66819736236a5a75a.png',
      },
      {
        id: 'l05D',
        name: 'Kỳ hạn 1 tuần',
        rate: '4.8',
        image: 'https://cdn.topi.vn/product/1ef9959a31e1d39528ec9eeb409ffa04.png',
      },
      {
        id: 'lXoV',
        name: 'Kỳ hạn 2 tuần',
        rate: '4.8',
        image: 'https://cdn.topi.vn/product/a829529fe12b98813dec7f1aef662146.png',
      },
      {
        id: '1EEO',
        name: 'Kỳ hạn 1 tháng',
        rate: '5.3',
        image: 'https://cdn.topi.vn/product/c82cedba0d47c7cb20b22367028d2561.png',
      },
      {
        id: 'ZADG',
        name: 'Kỳ hạn 2 tháng',
        rate: '5.3',
        image: 'https://cdn.topi.vn/product/d88882cad532f0b750122c108bea1593.png',
      },
      {
        id: '13Rl',
        name: 'Kỳ hạn 3 tháng',
        rate: '5.8',
        image: 'https://cdn.topi.vn/product/462d1e2f6173e35d9b892e8a096132ff.png',
      },
      {
        id: 'YJ9g',
        name: 'Kỳ hạn 4 tháng',
        rate: '5.8',
        image: 'https://cdn.topi.vn/product/a0885a379d3910c89cb65cdf1dc446d6.png',
      },
      {
        id: 'ZpoV',
        name: 'Kỳ hạn 5 tháng',
        rate: '5.8',
        image: 'https://cdn.topi.vn/product/a3ffde58311ccd3ee8b0e3d866aff149.png',
      },
      {
        id: 'Zoz1',
        name: 'Kỳ hạn 6 tháng',
        rate: '6.3',
        image: 'https://cdn.topi.vn/product/2bf9f138f554c97aa33a64217e16b31b.png',
      },
      {
        id: 'YLoK',
        name: 'Kỳ hạn 9 tháng',
        rate: '6.3',
        image: 'https://cdn.topi.vn/product/b69acdfc5eb44c9976d870771bc47952.png',
      },
      {
        id: 'ZApx',
        name: 'Kỳ hạn 12 tháng',
        rate: '7.0',
        image: 'https://cdn.topi.vn/product/2f3f19609b967530dda6bbccce02cbf0.png',
      },
      {
        id: 'Ya0o',
        name: 'Kỳ hạn 18 tháng',
        rate: '7.0',
        image: 'https://cdn.topi.vn/product/09165c1daa575b58cac2e42557929a5f.png',
      },
      {
        id: 'ln5m',
        name: 'Kỳ hạn 24 tháng',
        rate: '7.0',
        image: 'https://cdn.topi.vn/product/99980e13dc729d998f3f963fa31dbea5.png',
      },
      {
        id: 'lqe6',
        name: 'Kỳ hạn 36 tháng',
        rate: '8.0',
        image: 'https://cdn.topi.vn/product/0659596cbd1dea94e840220bb782abc9.png',
      },
    ]);

    // Methods
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 768;
      if (isMobileView !== isMobile.value) {
        isMobile.value = isMobileView;
        if (isMobileView) {
          isSidebarCollapsed.value = true;
        }
      }
    };

    const handleSidebarToggle = (isOpen: boolean) => {
      isSidebarCollapsed.value = !isOpen;
    };

    const handleHeaderToggle = () => {
      isSidebarCollapsed.value = !isSidebarCollapsed.value;
    };

    // Lifecycle hooks
    onMounted(() => {
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkIfMobile);
    });

    const initCarousel = async () => {
      // Wait for OwlCarousel to be available
      if (typeof window !== 'undefined' && window.$ && typeof window.$.fn.owlCarousel === 'function') {
        const carousel = $('.carousel-invest-item .owl-carousel');
        if (carousel.length) {
          // @ts-ignore
          carousel.owlCarousel({
            loop: true,
            margin: 16,
            nav: true,
            navText: [
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            ],
            dots: false,
            responsive: {
              0: { items: 2, margin: 8 },
              480: { items: 2.5, margin: 12 },
              768: { items: 3.5, margin: 16 },
              1024: { items: 4.5, margin: 16 },
              1280: { items: 5.5, margin: 16 },
            },
            onInitialized: function () {
              $('.owl-prev, .owl-next').removeClass('disabled');
            },
          });

          $('.carousel-invest-item .owl-prev').on('click', () => {
            carousel.trigger('prev.owl.carousel');
          });

          $('.carousel-invest-item .owl-next').on('click', () => {
            carousel.trigger('next.owl.carousel');
          });
        }
      } else {
        // Retry after a short delay if OwlCarousel is not ready
        setTimeout(initCarousel, 100);
      }
    };

    onMounted(() => {
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);

      if (window.$) {
        nextTick(() => {
          initCarousel();
        });
      }
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkIfMobile);
    });

    // Lifecycle hooks
    onMounted(() => {
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
      
      // Initialize investment terms
      investmentTerms.value = [
        {
          id: '1EOe',
          name: 'Tích luỹ linh hoạt',
          rate: '7.2',
          image: 'https://cdn.topi.vn/product/641282dc04e68f6f602ee68ec861c80b.png',
        },
        // ... other investment terms
      ];
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkIfMobile);
    });

    // Expose to template
    return {
      isSidebarCollapsed,
      isMobile,
      investmentTerms,
      handleSidebarToggle,
      handleHeaderToggle,
    };
  },
});
</script>

<style scoped>
@import './styles.css';

:root {
  --header-height: 70px;
  --sidebar-width: 280px;
  --sidebar-collapsed-width: 80px;
  --transition-duration: 0.3s;
}

.app-layout {
  display: flex;
  min-height: 100vh;
  position: relative;
  background-color: #f4f7f6;
  padding-top: var(--header-height);
}

.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  transition: margin-left var(--transition-duration) ease;
  min-height: calc(100vh - var(--header-height));
  background-color: #f5f7fa;
  width: calc(100% - var(--sidebar-width));
  padding: 1.5rem;
  overflow-y: auto;
}

.main-content.sidebar-collapsed {
  margin-left: 0;
  width: 100%;
}

.main-container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .main-content {
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .app-layout {
    padding-top: 60px; /* Slightly smaller header on mobile */
  }
  
  .main-content,
  .main-content.sidebar-collapsed {
    margin-left: 0;
    width: 100%;
    padding: 1rem;
  }
  
  .main-container {
    padding-bottom: 2rem; /* Add some space at the bottom on mobile */
  }
}
.app-container {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  color: #333;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .w-full {
    width: 100% !important;
  }
  .lg\:p-8 {
    padding: 1rem !important;
  }
}

/* Fix for carousel images */
.absolute-full {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Ensure images don't overflow */
img {
  max-width: 100%;
  height: auto;
}

/* Fix for flex layouts */
.flex-row-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* Button styles */
button {
  transition: all 0.3s ease;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

/* Card styles */
.bg-white-default {
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

/* Ensure proper spacing */
.mt-4 {
  margin-top: 1rem;
}

.mt-8 {
  margin-top: 2rem;
}

/* Fix for carousel navigation */
.owl-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  pointer-events: none;
}

.owl-prev,
.owl-next {
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.8) !important;
  width: 40px;
  height: 40px;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.owl-prev:hover,
.owl-next:hover {
  background: #fff !important;
  transform: scale(1.1);
}

/* Ensure proper text overflow handling */
.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive typography */
@media (max-width: 768px) {
  .text-lg-18-26 {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
