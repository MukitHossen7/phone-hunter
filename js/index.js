const loadAllData = async (isClick, searchText) => {
  document.getElementById("loadingContainer").classList.add("hidden");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      searchText ? searchText : "iphone"
    }`
  );
  const phoneData = await res.json();
  isClick
    ? displayLoadPhone(phoneData.data)
    : displayLoadPhone(phoneData.data.slice(0, 6));
};

// show-all-button-function
const showAllBtnFunction = () => {
  loadAllData(true);
};
// show-all-button-function

// display-load-phones
const displayLoadPhone = (phones) => {
  const cardContainer = document.getElementById("card-container");
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card border border-slate-200 p-9">
  <figure class="px-10 py-12 bg-[#0D6EFD0D] rounded-xl">
    <img
      src="${phone.image}"
      alt="phones"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">

    <h2 class="font-bold text-2xl text-dark2">${phone.phone_name}</h2>
    <p class="text-dark3 font-medium">There are many variations of passages of available, but the majority have suffered</p>
    <div class="card-actions">
      <button onclick="loadViewDetails('${phone.slug}')" class="btn btn-primary text-white">Show Details</button>
    </div>
  </div>
</div>
    `;
    cardContainer.append(div);
  });
};
// display-all-phones

// show-loading-function
const loadingDisplay = () => {
  document.getElementById("loadingContainer").classList.remove("hidden");
  const searchText = document.getElementById("inputValue").value;
  setTimeout(() => {
    loadAllData(false, `${searchText}`);
  }, 3000);
};
// show-loading-function

// load-details-function
const loadViewDetails = async (slugId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${slugId}`
  );
  const data = await res.json();

  displayViewDetails(data.data);
};
// load-details-function

// display-details-function
const displayViewDetails = (viewData) => {
  document.getElementById("modal-container").innerHTML = `
   <div class="bg-[#0D6EFD0D]">
    <img src="${viewData.image}" alt="phones">
   </div>
   <h3 class="font-bold text-2xl text-dark2 mt-4">${viewData.name}</h3>
   <p class="text-dark3 text-sm font-light mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <div class="text-start">
      <p class="text-xs mt-2"><span class="font-bold text-base ">Storage:</span> ${viewData.mainFeatures?.storage}</p>
      <p class="text-xs mt-2"><span class="font-bold text-base ">Display Size:</span> ${viewData.mainFeatures?.displaySize}</p>
        <p class="text-xs mt-2"><span class="font-bold text-base ">Chipset:</span> ${viewData.mainFeatures?.chipSet}</p>
          <p class="text-xs mt-2"><span class="font-bold text-base ">Memory:</span> ${viewData.mainFeatures?.memory}</p>
            <p class="text-xs mt-2"><span class="font-bold text-base ">slug:</span> ${viewData.slug}</p>
            <p class="text-xs mt-2"><span class="font-bold text-base ">Release data:</span> ${viewData.releaseDate}</p>
            <p class="text-xs mt-2"><span class="font-bold text-base ">Brand:</span> ${viewData.brand}</p>
             <p class="text-xs mt-2"><span class="font-bold text-base ">GPS:</span> ${viewData.others?.GPS}</p>
    </div>
  `;
  document.getElementById("my_modal").showModal();
};
// display-details-function
loadAllData();
