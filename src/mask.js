import React from 'react';
import './mask.css';

export default function Mask() {
  return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>MASK detection</title>
          <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
            <div className="flex justify-between">
              <h1 className="logoname"><a href="index.html">Eyes<span>S</span>py</a></h1>
              <a data-toggle="toggle-nav" data-target="#nav-items" href="#" className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
                <i data-feather="menu" />
              </a>
            </div>
            <div id="nav-items" className="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center">
              <a href="#blog" className="fs-s1 mx-3 py-3 indigo no-underline hover-underline"> .... </a>
              <a href="#" className="button bg-white black fw-600 no-underline mx-5">Verify</a>
            </div>
          </nav>
          {/* hero section */}
          <section id="home" className="min-h-100vh flex justify-start items-center">
            <div className="mx-5 md-mx-l5">
              <div>
                <h1 className="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900 ">Check if people<br />are wearing Mask</h1>
                <div className="br-8 mt-10 inline-flex">
                  <input type="text" className="input-lg half bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0" placeholder=" ..... " />
                  <button className="button-lg bg-indigo-lightest-20 indigo-lightest focus-white fw-300 fs-s3 mr-0 br-l-0">Upload</button>
                  <button className="button-lg bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Switch On Camera</button>
                </div>
              </div>
            </div>
          </section>
          {/* features */}
          <section id="features" className="p-10 md-p-l5">
            <div className="flex flex-column md-flex-row mx-auto">
              <div className="w-100pc md-w-40pc">
                <div className="br-8 p-5 m-5">
                  <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i data-feather="inbox" className="w-l5" /></div>
                  <h4 className="white fw-600 fs-m3 mb-5">Verify</h4>
                  <div className="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">Checks if mask is on!</div>
                  <a href="#" className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">RESULT</a>
                </div>
              </div>
              <div className="w-100pc md-w-40pc">
                <div className="br-8 p-5 m-5">
                  <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i data-feather="cpu" className="w-l5" /></div>
                  <h4 className="white fw-600 fs-m3 mb-5">Storage</h4>
                  <div className="indigo-lightest fw-600 fs-m1 opacity-50">Add the result in database if the person is found not wearing mask.</div>
                  <a href="#" className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">ADD</a>
                </div>
              </div>
              <div className="w-100pc md-w-40pc">
                <div className="br-8 p-5 m-5">
                  <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i data-feather="database" className="w-l5" /></div>
                  <h4 className="white fw-600 fs-m3 mb-5">Database</h4>
                  <div className="indigo-lightest fw-600 fs-m1 opacity-50">Edit data/results of existing pool of people who were not wearing mask.</div>
                  <a href="#" className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">EDIT</a>
                </div>
              </div>
            </div>
          </section>
          {/* slider */}
          <section className="relative bg-indigo-lightest-10">
            <div id="slider-1">
              <div className="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
                <h2 className="white fs-l3 fw-900"> .... </h2>
                <p className="indigo-lightest fw-600 fs-m1 opacity-30 my-5"> ...... </p>
              </div>
            </div>
            <ul className="absolute list-none w-100pc flex justify-between top-50pc">
              <li><button className="prev ml-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2 focus-indigo-lighter outline-none"><i data-feather="chevron-left" /></button></li>
              <li><button className="next mr-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2  focus-indigo-lighter outline-none"><i data-feather="chevron-right" /></button></li>
            </ul>
          </section>
          {/* product options */}
          <section className="py-l10">
            <div className="flex flex-column md-flex-row md-w-80pc mx-auto">
              <div className="w-100pc md-w-50pc">
              </div>
              <div className="w-100pc md-w-50pc">
              </div>
            </div>
          </section>
          <a className="fixed top-50pc right-0 p-3 bg-indigo white hover-scale-up-1 ease-300 no-underline" href="https://gum.co/tifJM" target="_blank">
            <i className="w-4" data-feather="download" />
          </a></div>
        );
    }