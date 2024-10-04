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
      <button class="btn btn-primary text-white">Show Details</button>
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

loadAllData();
