import React from "react";

function Services() {
  return (
    <div id="Services" class="flex flex-col w-full items-center ">
      <h1 class="md:mt-36 px-12 text-white md:text-7xl text-4xl mb-24 text-center font-heading underline decoration-6 underline-offset-6 decoration-dbluee">
        Services
      </h1>
      <div class="flex w-full flex-col md:flex-row mb-4 justify-between">
        <div class="flex-1 flex flex-col bg-lightGray h-auto pb-24 mb-12 md:mr-24 md:ml-24 mr-8 ml-8 shadow-[14px_16px_11px_rgba(0, 0, 0, 0.25)] py-8 rounded-3xl">
          <p class="font-heading text-white text-center text-4xl md:p-12">
            PRE-FINAL AUDITS
          </p>
          <ul class="list-none md:mr-12 md:ml-12 text-white font-mono md:text-sm text-auto md:px-0 px-4 pt-4 md:pt-0">
            <li>✅ Become deployment-ready</li>
            <li>✅ Github-based CI/CD</li>
            <li>✅ Contract monitoring</li>
            <li>✅ Optimizing for gas</li>
            <li>✅ Check for surface-level bugs</li>
            <li>✅ Get 100% test coverage</li>
            <li>✅ Industry-standard linting</li>
            <li>✅ Save money on actual audits</li>
            <li>✅ Streamline your development</li>
          </ul>
        </div>
        {/* md:mr-24 mb-12 */}
        {/* md:mr-24 */}
        <div class="flex-1 flex flex-col bg-lightGray h-auto pb-24 mb-12 md:mr-24 ml-8 mr-8 md:ml-0 mb-12  shadow-[14px_16px_11px_rgba(0, 0, 0, 0.25)] py-8 rounded-3xl">
          <p class="font-heading text-white text-center text-4xl md:p-12">
            GENERAL CONSULT
          </p>
          <ul class="list-none md:mr-12 md:ml-12 text-white font-mono md:text-sm text-auto md:px-0 px-4 pt-4 md:pt-0">
            <li>✅ Validate usecase for web3</li>
            <li>✅ Identify full dev stack</li>
            <li>✅ Figuring out “How to start?</li>
            <li>✅ Identifying ideal network</li>
            <li>✅ The fastest way to launch</li>
            <li>✅ 0.15 eth/hr (won’t bloat calls)</li>
            <li>✅ Formulate final documents</li>
            <li>✅ Get presentations that convince</li>
            <li>✅ General security guidelines</li>
          </ul>
        </div>
        <div class="flex-1 flex flex-col bg-lightGray h-auto pb-24 mb-12 md:mr-24 ml-8 mr-8 md:ml-0 shadow-[14px_16px_11px_rgba(0, 0, 0, 0.25)] py-8 rounded-3xl">
          <p class="font-heading text-white text-center text-4xl md:p-12">
            MVP building
          </p>
          <ul class="list-none md:mr-12 md:ml-12 text-white font-mono md:text-sm text-auto md:px-0 px-4 pt-4 md:pt-0">
            <li>✅ Quick turnaround</li>
            <li>✅ Get web3-functional MVPs</li>
            <li>✅ Visualise the product value</li>
            <li>✅ Shareable product for teams</li>
            <li>✅ Discount with GC bundling</li>
            <li>✅ Easy to debug and understand</li>
            <li>✅ Quickly go from to MVP to final product</li>
            <li>✅ Industry grade tooling</li>
            <li>✅ Secure, even at MVP level</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
