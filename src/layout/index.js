import React from "react";
import Modal from '../components/modal'

const Nav = (props) => {
  const { openMenu, stateMenu } = props
  return (
    <nav
      role="banner"
      className="flex fixed w-full justify-between text-xs top-0 left-0 right-0 px-4 py-3 items-center"
    >
      <div>
        <button onClick={() => openMenu(!stateMenu)} className="w-8 h-8 block focus:outline-none">
          <svg
            className="w-full h-full mt-2 text-gray-900 hover:text-black"
            fill="currentColor"
            viewBox="0 0 30 30"
          >
            <rect x="0" y="0" width="24" height="2" rx="1" ry="1"></rect>
            <rect x="0" y="7" width="24" height="2" rx="1" ry="1"></rect>
            <rect x="0" y="14" width="16" height="2" rx="1" ry="1"></rect>
          </svg>
        </button>
      </div>
      <div className="">
        <div className="flex align-center items-center">
          <div className="w-8 h-8 bg-pink-300 flex rounded-md mr-2" />
          <div className="flex flex-col leading-tight">
            <strong>Solar Flares</strong>
            <p>Go Periscope</p>
          </div>
          <div className="h-8 w-px bg-pink-300 mx-8" />
          <div>
            <button className="px-3 prev">
              <svg
                className="h-8 text-gray-700 hover:text-black"
                viewBox="0 0 30 30"
                version="1.1"
              >
                <g class="prev_btn" stroke="none" stroke-width="1">
                  <g id="prev_fill" class="player_btn_fill" fill="currentColor">
                    <path
                      d="M12.35501,14.2904429 C11.8820494,14.6896295 11.8815952,15.4182442 12.3540578,15.8180202 L20.7124638,22.8905176 C21.3623814,23.4404479 22.358406,22.9784928 22.358406,22.1271313 L22.358406,8 C22.358406,7.14922347 21.3635718,6.68706663 20.713416,7.23580896 L12.35501,14.2904429 Z M20.358406,8 L20.358406,22.1271313 L22.0043483,21.363745 L13.6459422,14.2912476 L13.64499,15.818825 L22.003396,8.76419104 L20.358406,8 Z"
                      id="triangle"
                    ></path>
                    <path
                      d="M9,22.5 C9,23.0522847 9.44771525,23.5 10,23.5 C10.5522847,23.5 11,23.0522847 11,22.5 L11,7.5 C11,6.94771525 10.5522847,6.5 10,6.5 C9.44771525,6.5 9,6.94771525 9,7.5 L9,22.5 Z"
                      id="Line"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
            <button className="px-3 play">
              <svg
                className="h-8 text-gray-700 hover:text-black"
                viewBox="0 0 30 30"
                version="1.1"
              >
                <g
                  class="pause_btn"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="nonezero"
                >
                  <g
                    id="pause_fill"
                    class="player_btn_fill"
                    fill="currentColor"
                  >
                    <path d="M9,15.0126545 L9,26.588083 C9,27.2045328 9.44771525,27.7042641 10,27.7042641 C10.5522847,27.7042641 11,27.2045328 11,26.588083 L11,15.0126545 L11,3.43722604 C11,2.82077623 10.5522847,2.32104492 10,2.32104492 C9.44771525,2.32104492 9,2.82077623 9,3.43722604 L9,15.0126545 Z M19,15.0126545 L19,26.588083 C19,27.2045328 19.4477153,27.7042641 20,27.7042641 C20.5522847,27.7042641 21,27.2045328 21,26.588083 L21,15.0126545 L21,3.43722604 C21,2.82077623 20.5522847,2.32104492 20,2.32104492 C19.4477153,2.32104492 19,2.82077623 19,3.43722604 L19,15.0126545 Z"></path>
                  </g>
                </g>
              </svg>
            </button>
            <button className="px-3 next">
              <svg
                className="h-8 text-gray-700 hover:text-black"
                viewBox="0 0 30 30"
                version="1.1"
              >
                <g class="next_btn" stroke="none" stroke-width="1">
                  <g id="next_fill" class="player_btn_fill" fill="currentColor">
                    <path
                      d="M16.713416,15.818825 L16.7124638,14.2912476 L8.35405776,21.363745 L10,22.1271313 L10,8 L8.35501003,8.76419104 L16.713416,15.818825 Z M8,8 L8,22.1271313 C8,22.9784928 8.99602459,23.4404479 9.64594224,22.8905176 L18.0043483,15.8180202 C18.4768108,15.4182442 18.4763566,14.6896295 18.003396,14.2904429 L9.64498997,7.23580896 C8.99483417,6.68706663 8,7.14922347 8,8 Z"
                      id="triangle"
                    ></path>
                    <path
                      d="M19,22.5 C19,23.0522847 19.4477153,23.5 20,23.5 C20.5522847,23.5 21,23.0522847 21,22.5 L21,7.5 C21,6.94771525 20.5522847,6.5 20,6.5 C19.4477153,6.5 19,6.94771525 19,7.5 L19,22.5 Z"
                      id="line"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div>
            <button>
              <svg width="30px" height="30px" viewBox="0 0 30 30">
                <g
                  class="list_btn"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="nonezero"
                >
                  <g id="list_fill" fill="#3A3B46">
                    <path
                      d="M9,9 C9,8.44771525 9.45470893,8 9.9999602,8 L25.0000398,8 C25.5523026,8 26,8.44386482 26,9 C26,9.55228475 25.5452911,10 25.0000398,10 L9.9999602,10 C9.44769743,10 9,9.55613518 9,9 Z M9,15 C9,14.4477153 9.45470893,14 9.9999602,14 L25.0000398,14 C25.5523026,14 26,14.4438648 26,15 C26,15.5522847 25.5452911,16 25.0000398,16 L9.9999602,16 C9.44769743,16 9,15.5561352 9,15 Z M9,21 C9,20.4477153 9.45470893,20 9.9999602,20 L25.0000398,20 C25.5523026,20 26,20.4438648 26,21 C26,21.5522847 25.5452911,22 25.0000398,22 L9.9999602,22 C9.44769743,22 9,21.5561352 9,21 Z M4,9 C4,8.44771525 4.44386482,8 5,8 C5.55228475,8 6,8.44386482 6,9 C6,9.55228475 5.55613518,10 5,10 C4.44771525,10 4,9.55613518 4,9 Z M4,15 C4,14.4477153 4.44386482,14 5,14 C5.55228475,14 6,14.4438648 6,15 C6,15.5522847 5.55613518,16 5,16 C4.44771525,16 4,15.5561352 4,15 Z M4,21 C4,20.4477153 4.44386482,20 5,20 C5.55228475,20 6,20.4438648 6,21 C6,21.5522847 5.55613518,22 5,22 C4.44771525,22 4,21.5561352 4,21 Z"
                      id="Combined-Shape"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer
      role="content-info"
      className="flex fixed w-full text-xs justify-between bottom-0 left-0 right-0 px-4 py-3 items-center"
    >
      <div
        className="flex items-center text-gray-700"
        style={{ maxWidth: 300 }}
      >
        <span className="w-8 h-8 bg-blue-700 mr-4 block rounded-full"></span>
        DEVELOPED BY LEONARDO ELIAS <br />
        ALL RIGHTS REVERVED.
      </div>
      <div>
        <button className="text-gray-700">LIGHT MODE</button>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const onClose = () => setIsVisible(false)
  
  return (
    <>
      <Modal
        isVisible={isVisible}
        onClose={() => onClose()}
      >
        test
      </Modal>

      <div
        className="wave bg-blue-500 w-full absolute bottom-0 left-0 right-0"
        style={{ height: "65vh" }}
      />
      <div className="h-full relative">
        <Nav openMenu={setIsVisible} stateMenu={isVisible} />
        <main role="main" className="">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
