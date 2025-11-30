import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
//import slider img
import img1 from "../../../assets/slider1.jpg";
import img2 from "../../../assets/slider2.jpg";
import img4 from "../../../assets/slider4.jpg";
import img6 from "../../../assets/slider6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Carousel = () => {
  return (
    <div className="px-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-auto"
      >
        <SwiperSlide>
          <div class="px-2 py-20">
            <div class="flex flex-col md:flex-row items-center gap-10">
              {/* <!-- Left Content --> */}
              <div class="flex-1 space-y-4">
                <p class="text-primary font-medium">
                  Start your favourite course
                </p>

                <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                  Unlock Your <br />
                  Learning Power <br />
                  with Us!
                </h1>

                <p class="text-base text-gray-600 max-w-md">
                  Embark on a transformative e-learning experience. Our diverse
                  courses cater to every learner. Engage with interactive
                  content, expert instructors, and a supportive community.
                  Elevate your knowledge journey with us!
                </p>

                <div class="flex items-center gap-5 pt-4">
                  <Link
                    to="/find-partners"
                    class="btn btn-primary px-6 text-white"
                  >
                    Find Partners
                  </Link>
                  <button
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300 "
                    onClick={() =>
                      document.getElementById("playBtn").showModal()
                    }
                  >
                    <div class="flex items-center gap-2 ">
                      <div className="bg-primary rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-play-shadow">
                        <span className=" p-1 rounded-full">
                          <IoPlayCircleOutline
                            className="text-white"
                            size={25}
                          />
                        </span>
                      </div>
                    </div>
                    Watch Video
                  </button>
                  {/* Modal content */}
                  <dialog
                    id="playBtn"
                    className="modal modal-bottom sm:modal-middle"
                    onClose={() => {
                      const iframe = document.getElementById("ytPlayer");
                      iframe.src = iframe.src; // Reset video (stop playback)
                    }}
                  >
                    <div className="modal-box">
                      <iframe
                        id="ytPlayer"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/hVmaIdQmmbs?autoplay=1&mute=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>

                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn-circle bg-error p-2 text-white cursor-pointer">
                            <MdOutlineClose className="hover:rotate-30 hover:scale-125 transition-all duration-300" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

              {/* -- Right Image - */}
              <div class="flex-1 flex justify-end">
                <div>
                  <img
                    src={img1}
                    class="rounded-xl shadow-lg object-cover h-[400px]"
                    alt="Student"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="px-2 py-20">
            <div class="flex flex-col md:flex-row items-center justify-between gap-10">
              {/* <!-- Left Content --> */}
              <div class=" space-y-4">
                <p class="text-primary font-medium">
                  Start your favourite course
                </p>

                <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                  Investing in <br />
                  Knowledge and <br />
                  Your Future!
                </h1>

                <p class="text-base text-gray-600 max-w-md">
                  We are always alailed to consult on taking your higher
                  education to the next level so you can find a partner!
                </p>

                 <div class="flex items-center gap-5 pt-4">
                  <Link
                    to="/find-partners"
                    class="btn btn-primary px-6 text-white"
                  >
                    Find Partners
                  </Link>
                  <button
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300 "
                    onClick={() =>
                      document.getElementById("playBtn").showModal()
                    }
                  >
                    <div class="flex items-center gap-2 ">
                      <div className="bg-primary rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-play-shadow">
                        <span className=" p-1 rounded-full">
                          <IoPlayCircleOutline
                            className="text-white"
                            size={25}
                          />
                        </span>
                      </div>
                    </div>
                    Watch Video
                  </button>
                  {/* Modal content */}
                  <dialog
                    id="playBtn"
                    className="modal modal-bottom sm:modal-middle"
                    onClose={() => {
                      const iframe = document.getElementById("ytPlayer");
                      iframe.src = iframe.src; // Reset video (stop playback)
                    }}
                  >
                    <div className="modal-box">
                      <iframe
                        id="ytPlayer"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/hVmaIdQmmbs?autoplay=1&mute=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>

                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn-circle bg-error p-2 text-white cursor-pointer">
                            <MdOutlineClose />
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

              {/* -- Right Image - */}
              <div class=" flex justify-end">
                <div>
                  <img
                    src={img2}
                    class="rounded-xl shadow-lg object-cover h-[400px]"
                    alt="Student"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="px-2 py-20">
            <div class="flex flex-col md:flex-row items-center gap-10">
              {/* <!-- Left Content --> */}
              <div class="flex-1 space-y-4">
                <p class="text-primary font-medium">
                  Start your favourite course
                </p>

                <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                  Study Smarter <br />
                  Not Harder with <br />
                  studyMate!
                </h1>

                <p class="text-base text-gray-600 max-w-md">
                  StudyMate is your all-in-one digital study companion, making
                  learingin organized, efficient, and engaging. With structured
                  summaries, interactive review questions.!
                </p>

                 <div class="flex items-center gap-5 pt-4">
                  <Link
                    to="/find-partners"
                    class="btn btn-primary px-6 text-white"
                  >
                    Find Partners
                  </Link>
                  <button
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300 "
                    onClick={() =>
                      document.getElementById("playBtn").showModal()
                    }
                  >
                    <div class="flex items-center gap-2 ">
                      <div className="bg-primary rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-play-shadow">
                        <span className=" p-1 rounded-full">
                          <IoPlayCircleOutline
                            className="text-white"
                            size={25}
                          />
                        </span>
                      </div>
                    </div>
                    Watch Video
                  </button>
                  {/* Modal content */}
                  <dialog
                    id="playBtn"
                    className="modal modal-bottom sm:modal-middle"
                    onClose={() => {
                      const iframe = document.getElementById("ytPlayer");
                      iframe.src = iframe.src; // Reset video (stop playback)
                    }}
                  >
                    <div className="modal-box">
                      <iframe
                        id="ytPlayer"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/hVmaIdQmmbs?autoplay=1&mute=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>

                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn-circle bg-error p-2 text-white cursor-pointer">
                            <MdOutlineClose />
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

              {/* -- Right Image - */}
              <div class="flex-1 flex justify-end">
                <div>
                  <img
                    src={img6}
                    class="rounded-xl shadow-lg object-cover h-[400px]"
                    alt="Student"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="px-2 py-20">
            <div class="flex flex-col md:flex-row items-center gap-10">
              {/* <!-- Left Content --> */}
              <div class="flex-1 space-y-4">
                <p class="text-primary font-medium">
                  Start your favourite course
                </p>

                <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                  Limitless learining <br />
                  at your fingertips
                </h1>

                <p class="text-base text-gray-600 max-w-md">
                  Online learning and teaching marketplace with 5K+ courses &
                  10M students. Taught by experts to help you acquire new
                  skills.!
                </p>

                <div class="flex items-center gap-5 pt-4">
                  <Link
                    to="/find-partners"
                    class="btn btn-primary px-6 text-white"
                  >
                    Find Partners
                  </Link>
                  <button
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-300 "
                    onClick={() =>
                      document.getElementById("playBtn").showModal()
                    }
                  >
                    <div class="flex items-center gap-2 ">
                      <div className="bg-primary rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-play-shadow">
                        <span className=" p-1 rounded-full">
                          <IoPlayCircleOutline
                            className="text-white"
                            size={25}
                          />
                        </span>
                      </div>
                    </div>
                    Watch Video
                  </button>
                  {/* Modal content */}
                  <dialog
                    id="playBtn"
                    className="modal modal-bottom sm:modal-middle"
                    onClose={() => {
                      const iframe = document.getElementById("ytPlayer");
                      iframe.src = iframe.src; // Reset video (stop playback)
                    }}
                  >
                    <div className="modal-box">
                      <iframe
                        id="ytPlayer"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/hVmaIdQmmbs?autoplay=1&mute=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>

                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn-circle bg-error p-2 text-white cursor-pointer">
                            <MdOutlineClose />
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

              {/* -- Right Image - */}
              <div class="flex-1 flex justify-end">
                <div>
                  <img
                    src={img4}
                    class="rounded-xl shadow-lg object-cover h-[400px]"
                    alt="Student"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
