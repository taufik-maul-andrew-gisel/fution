export default function Home() {
  return (
    <>
      {/* <body className="box-border m-0 p-0 font-sans"> */}
      {/* FUTION'S NAVBAR SECTION */}

      <body className="m-0 p-0 bg-white">
        <div className="flex flex-row justify-center items-center shadow-[0_1px_8px_#ddd] bg-white sticky z-[2] top-0">
          <img
            src="https://media.discordapp.net/attachments/1182644325969047673/1184452706723704958/Logo_Fution-transformed-removebg-preview.png?ex=658c068b&is=6579918b&hm=be9bee5adb5de639ff2907f57dd3b6f32869213486f0789008c6aab397fe50b5&=&format=webp&quality=lossless&width=500&height=500"
            alt=""
            className="h-28 mr-96 w-28"
          />
          <h3 className="px-5 py-0 text-black">How it works</h3>
          <h3 className="px-5 py-0 text-black">About us</h3>
          <h3 className="px-5 py-0 text-black">FAQ</h3>
          <h3 className="px-5 py-0 text-black">Login</h3>
          <h3 className="px-5 py-0 text-black">Register</h3>
        </div>
        {/* FUTION'S NAVBAR SECTION */}
        {/* ------------------------------------------------------------------------------- */}
        {/* BANNER */}
        <section className="bg-white">
          {/* BACKGROUND BANNER */}
          <div
            className="flex h-screen w-full items-center justify-center bg-gray-300 bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://c4.wallpaperflare.com/wallpaper/129/22/327/hands-greeting-handshake-wallpaper-preview.jpg')",
            }}
          >
            <div className="bg-gray-800 bg-opacity-50 h-screen w-full backdrop-blur-md">
              {/* END OF BACKGROUND BANNER */}

              {/* CONTENT */}
              <div className="text-white flex flex-col items-center h-full justify-center px-10 gap-10">
                {/*  */}

                <h1 className="font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none text-7xl">
                  <span className="inline md:block">Welcome to FuTion</span>
                </h1>

                {/*  */}
                <span className="flex items-center p-8">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo, ducimus facere voluptatibus debitis dignissimos
                  tenetur omnis, eaque odit molestias tempore, sunt aspernatur
                  unde laboriosam fugit non minus commodi perspiciatis officiis?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Obcaecati dignissimos corrupti laboriosam, tempora assumenda
                  possimus voluptate repellendus suscipit nemo sed animi beatae
                  minima eius corporis nisi totam consequatur qui ratione?
                </span>
                {/*  */}
                <div className="flex flex-row gap-9 ">
                  <div className="group flex items-center bg-blue-500 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
                    <img
                      className="w-9"
                      src="data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FF3E00;%7D .st1%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cpath class='st0' d='M69,10.6C61.6,0,46.9-3.2,36.3,3.6L17.7,15.4c-5.1,3.2-8.6,8.4-9.7,14.3c-0.9,4.9-0.1,10,2.2,14.5 c-1.6,2.4-2.7,5.1-3.2,8C6,58.2,7.4,64.4,11,69.4c7.5,10.6,22.1,13.8,32.7,7l18.6-11.9c5.1-3.2,8.6-8.4,9.7-14.3 c0.9-4.9,0.1-10-2.2-14.5c1.6-2.4,2.7-5.1,3.2-8C74,21.8,72.6,15.6,69,10.6'/%3E %3Cpath class='st1' d='M34.7,69.6c-5.8,1.5-12-0.8-15.4-5.7c-2.1-2.9-2.9-6.5-2.3-10.1c0.1-0.6,0.2-1.1,0.4-1.7l0.3-1l0.9,0.7 c2.1,1.6,4.5,2.8,7.1,3.5l0.7,0.2l-0.1,0.7c-0.1,1,0.2,1.9,0.7,2.7c1,1.5,2.9,2.2,4.7,1.8c0.4-0.1,0.8-0.3,1.1-0.5l18.1-11.5 c0.9-0.6,1.5-1.5,1.7-2.5c0.2-1.1,0-2.1-0.7-3c-1-1.5-2.9-2.2-4.7-1.7c-0.4,0.1-0.8,0.3-1.1,0.5l-6.9,4.4c-1.1,0.7-2.4,1.3-3.7,1.6 c-5.8,1.5-12-0.8-15.4-5.7c-2.1-2.9-2.9-6.5-2.3-10.1c0.6-3.5,2.7-6.5,5.6-8.4l18.1-11.5c1.1-0.7,2.4-1.3,3.7-1.6 c5.8-1.5,12,0.8,15.4,5.7c2.1,2.9,2.9,6.5,2.3,10.1c-0.1,0.6-0.2,1.1-0.4,1.7l-0.3,1l-0.9-0.7c-2.1-1.6-4.5-2.8-7.1-3.5l-0.7-0.2 l0.1-0.7c0.1-1-0.2-1.9-0.7-2.7c-1-1.5-2.9-2.2-4.7-1.7c-0.4,0.1-0.8,0.3-1.1,0.5L29.1,31.5C28.2,32,27.5,33,27.4,34 c-0.2,1.1,0,2.2,0.7,3c1,1.5,2.9,2.2,4.7,1.7c0.4-0.1,0.8-0.3,1.1-0.5l6.9-4.4c1.1-0.7,2.4-1.3,3.7-1.6c5.8-1.5,12,0.8,15.4,5.7 c2.1,2.9,2.9,6.5,2.3,10.1c-0.6,3.5-2.7,6.5-5.6,8.4L38.4,67.9C37.2,68.7,36,69.2,34.7,69.6'/%3E %3C/svg%3E"
                      alt=""
                    />
                    <div>
                      <span>Register as a Lender</span>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition" />
                    </div>
                  </div>

                  <div className="group flex items-center bg-blue-500 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
                    <img
                      className="w-9"
                      src="data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FF3E00;%7D .st1%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cpath class='st0' d='M69,10.6C61.6,0,46.9-3.2,36.3,3.6L17.7,15.4c-5.1,3.2-8.6,8.4-9.7,14.3c-0.9,4.9-0.1,10,2.2,14.5 c-1.6,2.4-2.7,5.1-3.2,8C6,58.2,7.4,64.4,11,69.4c7.5,10.6,22.1,13.8,32.7,7l18.6-11.9c5.1-3.2,8.6-8.4,9.7-14.3 c0.9-4.9,0.1-10-2.2-14.5c1.6-2.4,2.7-5.1,3.2-8C74,21.8,72.6,15.6,69,10.6'/%3E %3Cpath class='st1' d='M34.7,69.6c-5.8,1.5-12-0.8-15.4-5.7c-2.1-2.9-2.9-6.5-2.3-10.1c0.1-0.6,0.2-1.1,0.4-1.7l0.3-1l0.9,0.7 c2.1,1.6,4.5,2.8,7.1,3.5l0.7,0.2l-0.1,0.7c-0.1,1,0.2,1.9,0.7,2.7c1,1.5,2.9,2.2,4.7,1.8c0.4-0.1,0.8-0.3,1.1-0.5l18.1-11.5 c0.9-0.6,1.5-1.5,1.7-2.5c0.2-1.1,0-2.1-0.7-3c-1-1.5-2.9-2.2-4.7-1.7c-0.4,0.1-0.8,0.3-1.1,0.5l-6.9,4.4c-1.1,0.7-2.4,1.3-3.7,1.6 c-5.8,1.5-12-0.8-15.4-5.7c-2.1-2.9-2.9-6.5-2.3-10.1c0.6-3.5,2.7-6.5,5.6-8.4l18.1-11.5c1.1-0.7,2.4-1.3,3.7-1.6 c5.8-1.5,12,0.8,15.4,5.7c2.1,2.9,2.9,6.5,2.3,10.1c-0.1,0.6-0.2,1.1-0.4,1.7l-0.3,1l-0.9-0.7c-2.1-1.6-4.5-2.8-7.1-3.5l-0.7-0.2 l0.1-0.7c0.1-1-0.2-1.9-0.7-2.7c-1-1.5-2.9-2.2-4.7-1.7c-0.4,0.1-0.8,0.3-1.1,0.5L29.1,31.5C28.2,32,27.5,33,27.4,34 c-0.2,1.1,0,2.2,0.7,3c1,1.5,2.9,2.2,4.7,1.7c0.4-0.1,0.8-0.3,1.1-0.5l6.9-4.4c1.1-0.7,2.4-1.3,3.7-1.6c5.8-1.5,12,0.8,15.4,5.7 c2.1,2.9,2.9,6.5,2.3,10.1c-0.6,3.5-2.7,6.5-5.6,8.4L38.4,67.9C37.2,68.7,36,69.2,34.7,69.6'/%3E %3C/svg%3E"
                      alt=""
                    />
                    <div>
                      <span>Register as a Borrower</span>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition" />
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              {/* END OF CONTENT */}
            </div>
          </div>
        </section>
        {/* END OF BANNER */}

        {/* ------------------------------------------------------------------------------- */}
        {/* FUTION'S MATCHING PROCESS SECTION*/}
        {/* main container div */}

        <div className="flex flex-row bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 font-white w-full">
          {/* 1st div */}
          <div className="flex flex-col text-[black] px-10 py-10">
            {/* 1.1 div */}
            {/* <h2 className="text-4xl font-bold">FuTion's Matching Process</h2> */}
            {/* 1.1 div */}

            <span className="underline leading-8 underline-offset-8	decoration-8 decoration-blue-400">
              <h2 className="text-4xl font-bold">FuTion's Matching Process</h2>
            </span>

            {/* 1.2 div (column)*/}
            <div className="flex flex-col">
              {/* STEP 1 (row) */}
              <div className="flex flex-row">
                {/* 1.2.1 div */}
                <div className="self-center p-10">STEP 1</div>
                {/* 1.2.1 div */}
                {/* 1.2.2 div (column)*/}
                <div className="pt-6">
                  <h3>Apply fast.</h3>
                  <p>
                    Fill out our simple application in minutes with no impact to
                    your credit.
                  </p>
                </div>
                {/* 1.2.2 div */}
              </div>
              {/* STEP 1 */}

              {/* STEP 1 (row) */}
              <div className="flex flex-col">
                <div className="flex flex-row">
                  {/* 1.2.1 div */}
                  <div className="self-center p-10">STEP 1</div>
                  {/* 1.2.1 div */}

                  {/* 1.2.2 div (column)*/}
                  <div className="pt-6">
                    <h3>Apply fast.</h3>
                    <p>
                      Fill out our simple application in minutes with no impact
                      to your credit.
                    </p>
                  </div>
                  {/* 1.2.2 div */}
                </div>
              </div>
              {/* STEP 1 */}

              {/* STEP 1 (row) */}
              <div className="flex flex-row">
                {/* 1.2.1 div */}
                <div className="self-center p-10">STEP 1</div>
                {/* 1.2.1 div */}
                {/* 1.2.2 div (column)*/}
                <div className="pt-6">
                  <h3>Apply fast.</h3>
                  <p>
                    Fill out our simple application in minutes with no impact to
                    your credit.
                  </p>
                </div>
                {/* 1.2.2 div */}
              </div>
              {/* STEP 1 */}

              {/* STEP 1 (row) */}
              <div className="flex flex-row">
                {/* 1.2.1 div */}
                <div className="self-center p-10">STEP 1</div>
                {/* 1.2.1 div */}
                {/* 1.2.2 div (column)*/}
                <div className="pt-6">
                  <h3>Apply fast.</h3>
                  <p>
                    Fill out our simple application in minutes with no impact to
                    your credit.
                  </p>
                </div>
                {/* 1.2.2 div */}
              </div>
              {/* STEP 1 */}

              {/* STEP 1 (row) */}
              <div className="flex flex-row;">
                {/* 1.2.1 div */}
                <div className="self-center p-10">STEP 1</div>
                {/* 1.2.1 div */}
                {/* 1.2.2 div (column)*/}
                <div className="pt-6">
                  <h3>Apply fast.</h3>
                  <p>
                    Fill out our simple application in minutes with no impact to
                    your credit.
                  </p>
                </div>
                {/* 1.2.2 div */}
              </div>
              {/* STEP 1 */}
            </div>
            {/* 1.2 div */}
          </div>
          {/* 1st div */}
          {/* 2nd div */}
          <div className="self-center px-32 py-10">
            <img
              src="https://cdn.dribbble.com/userupload/9517221/file/original-f9ffd848c54e2e2c5a68dd5333c70e9c.jpg?resize=400x0"
              alt=""
            />
          </div>
          {/* 2nd div */}
        </div>
        {/* main container div */}
        {/* FUTION'S MATCHING PROCESS SECTION*/}
        {/* ------------------------------------------------------------------------------- */}
        {/* CARDS SECTION */}
        <div className="flex flex-col justify-center content-center text-center bg-gray-200  p-28 text-black">
          <span className="underline leading-8 underline-offset-8	decoration-8 decoration-blue-400">
            <h2 className="text-4xl font-bold">Testimonial</h2>
          </span>
          <div className="w-auto flex justify-around content-center m-5 p-5">
            {/* 1st card */}
            <div className="w-[calc(33%_-_10px)] rounded cursor-pointer shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] mx-2.5 my-0 p-6 bg-white">
              {/* 1st div */}
              <div className="flex flex-wrap items-center mb-2.5 pt-2.5">
                {/* 1.1 div */}
                <div className="h-20 w-20 p-0.5 rounded-[50%]">
                  <img
                    src="https://iheartcraftythings.com/wp-content/uploads/2021/05/Cartoon-People-DRAWING-%E2%80%93-STEP-4.jpg"
                    alt=""
                    className=" w-full h-full rounded-[50%] border-2 border-black"
                  />
                </div>
                {/* 1.1 div */}
                {/* 1.2 div */}
                <div className="ml-8">
                  <div className="font-semibold text-lg text-[#111011]">
                    Jane Jana
                  </div>
                  <div className="text-xs text-[grey] font-medium">
                    Borrower, Founder of Moonbucks
                  </div>
                </div>
                {/* 1.2 div */}
              </div>
              {/* 1st div */}

              {/* 2nd div */}
              <div className="text-justify text-sm font-medium text-[#111011] leading-[1.6]">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus possimus deserunt nobis ad officia odit
                  blanditiis rem praesentium, eaque error molestiae eius
                  architecto voluptas, modi labore ipsum? Asperiores, blanditiis
                  doloribus?
                </p>
              </div>
              {/* 2nd div */}
            </div>
            {/* 1st card */}

            {/* 2nd card */}
            <div className="w-[calc(33%_-_10px)] rounded cursor-pointer shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] mx-2.5 my-0 p-6 bg-white m-2.5 scale-[1.12]">
              {/* 1st div */}
              <div className="flex flex-wrap items-center mb-2.5 pt-2.5">
                {/* 1.1 div */}
                <div className="h-20 w-20 p-0.5 rounded-[50%]">
                  <img
                    src="https://iheartcraftythings.com/wp-content/uploads/2021/05/Cartoon-People-DRAWING-%E2%80%93-STEP-4.jpg"
                    alt=""
                    className=" w-full h-full rounded-[50%] border-2 border-black"
                  />
                </div>
                {/* 1.1 div */}
                {/* 1.2 div */}
                <div className="ml-8">
                  <div className="font-semibold text-lg text-[#111011]">
                    Jane Jana
                  </div>
                  <div className="text-xs text-[grey] font-medium">
                    Borrower, Founder of Moonbucks
                  </div>
                </div>
                {/* 1.2 div */}
              </div>
              {/* 1st div */}
              {/* 2nd div */}
              <div className="text-justify text-sm font-medium text-[#111011] leading-[1.6]">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus possimus deserunt nobis ad officia odit
                  blanditiis rem praesentium, eaque error molestiae eius
                  architecto voluptas, modi labore ipsum? Asperiores, blanditiis
                  doloribus?
                </p>
              </div>
              {/* 2nd div */}
            </div>
            {/* 2nd card */}

            {/* 3rd card */}
            <div className="w-[calc(33%_-_10px)] rounded cursor-pointer shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] mx-2.5 my-0 p-6 bg-white">
              {/* 1st div */}
              <div className="flex flex-wrap items-center mb-2.5 pt-2.5">
                {/* 1.1 div */}
                <div className="h-20 w-20 p-0.5 rounded-[50%]">
                  <img
                    src="https://iheartcraftythings.com/wp-content/uploads/2021/05/Cartoon-People-DRAWING-%E2%80%93-STEP-4.jpg"
                    alt=""
                    className=" w-full h-full rounded-[50%] border-2 border-black"
                  />
                </div>
                {/* 1.1 div */}
                {/* 1.2 div */}
                <div className="ml-8">
                  <div className="font-semibold text-lg text-[#111011]">
                    Jane Jana
                  </div>
                  <div className="text-xs text-[grey] font-medium">
                    Borrower, Founder of Moonbucks
                  </div>
                </div>
                {/* 1.2 div */}
              </div>
              {/* 1st div */}
              {/* 2nd div */}
              <div className="text-justify text-sm font-medium text-[#111011] leading-[1.6]">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus possimus deserunt nobis ad officia odit
                  blanditiis rem praesentium, eaque error molestiae eius
                  architecto voluptas, modi labore ipsum? Asperiores, blanditiis
                  doloribus?
                </p>
              </div>
              {/* 2nd div */}
            </div>
            {/* 3rd card */}
          </div>
        </div>
        {/* CARDS SECTION */}
        {/* ------------------------------------------------------------------------------- */}
        {/* ROLE SECTION */}
        {/* main div */}
        <div className="bg-white flex flex-col p-14 text-black">
          {/* 1st div */}
          {/* <div className="flex flex-col items-center">
            <h1 className="mb-0">MARKETPLACE FuTion</h1>
            <p className="mt-0">Your dream starts here!</p>
          </div> */}

          <span className="flex flex-col items-center underline leading-8 underline-offset-8	decoration-8 decoration-blue-400 pb-8">
            <h2 className="text-4xl font-bold">Marketplace FuTion</h2>
          </span>

          {/* 1st div */}
          {/* 2nd div */}
          <div className="flex flex-row text-center">
            {/* 2.1 div */}
            <div className="p-5">
              <h2 className="font-semibold text-lg">LENDERS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quis, nihil minus dignissimos at consequuntur. Minus,
                eos! Accusamus ullam hic distinctio? Odit quisquam vel fugit
                tempore enim nam facere doloremque.
              </p>
              <div className="flex flex-row items-center gap-4 text-white">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                  Register as Lenders
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                  More Information about Lenders
                </button>
              </div>
            </div>
            {/* 2.1 div */}
            <div className="h-52 border-l-2 border-l-[black] border-solid" />
            {/* 2.2 div */}
            <div className="p-5">
              <h2 className="font-semibold text-lg">FuTion</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quis, nihil minus dignissimos at consequuntur. Minus,
                eos! Accusamus ullam hic distinctio? Odit quisquam vel fugit
                tempore enim nam facere doloremque.
              </p>
            </div>
            {/* 2.2 div */}
            <div className="h-52 border-l-2 border-l-[black] border-solid" />
            {/* 2.3 div */}
            <div className="p-5">
              <h2 className="font-semibold text-lg">BORROWERS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quis, nihil minus dignissimos at consequuntur. Minus,
                eos! Accusamus ullam hic distinctio? Odit quisquam vel fugit
                tempore enim nam facere doloremque.
              </p>
              <div className="flex flex-row items-center gap-4 text-white">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                  Register as Borrowers
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                  More Information about Borrowers
                </button>
              </div>
            </div>
            {/* 2.3 div */}
          </div>
          {/* 2nd div */}
        </div>
        {/* main div */}
        {/* ROLE SECTION */}
        {/* ------------------------------------------------------------------------------- */}
        {/* FOOTER SECTION */}
        {/* main div */}
        <div className="bg-sky-950 flex flex-row justify-center content-center  p-14 gap-12">
          {/* 1st div */}
          <div className="flex flex-col text-left pl-8">
            <h2 className="font-semibold text-lg text-blue-300">FuTion</h2>
            <p className="transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
              Home
            </p>
            <p className="transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
              Sitemap
            </p>
            <p className="transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
              FAQ
            </p>
          </div>
          {/* 1st div */}
          {/* 2nd div */}
          <div className="flex flex-col text-left px-8 py-0 ">
            {/* 2.1 div */}
            <h2 className="font-semibold text-lg text-blue-300">CONTACT US</h2>
            <div className="gap-3">
              <div className="icons-text flex flex-row gap-3">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p>021-3456789</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <p>6544334890</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <p>654567890</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  className="h-6 w-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="3 9 12 15 21 9 12 3 3 9" />{" "}
                  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />{" "}
                  <line x1="3" y1="19" x2="9" y2="13" />{" "}
                  <line x1="15" y1="13" x2="21" y2="19" />
                </svg>
                <p>cs@fution.co.id</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="telegram-1"
                    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                  />
                </svg>
                <p>csFuTion</p>
              </div>
            </div>
            {/* 2.1 div */}
          </div>
          {/* 2nd div */}
          {/* 3rd div */}
          <div className="flex flex-col text-left px-8s py-0">
            <h2 className="font-semibold text-lg text-blue-300">
              SOCIAL MEDIA
            </h2>

            <div className="social-media-icon">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="fb"
                />
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width="30"
                  height="30"
                  alt="tw"
                />
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="inst"
                />
                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width="30"
                  height="30"
                  alt="in"
                />
              </div>
            </div>
          </div>
          {/* 3rd div */}
          {/* 4th div */}
          <div className="flex flex-col text-left">
            <h2 className="font-semibold text-lg text-blue-300">SECURITY</h2>
            <img src="security.png" alt="" />
          </div>
          {/* 4th div */}
        </div>
      </body>
      {/* FOOTER SECTION */}
      {/* </body> */}
    </>
  );
}
