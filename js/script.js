function getStandingGroup() {
  const containerGroup = document.querySelector(".standing-group");
  containerGroup.append(createLoading());
  fetch("https://api.football-data.org/v2/competitions/2001/standings", {
    headers: {
      "X-Auth-Token": "e3882deb1b47442484b161ea1d84fce6",
    },
  })
    .then((result) => result.json())
    .then((result) => {
      const allGroup = result.standings.map((teams) => {
        const { type, group, table } = teams;
        if (type !== "TOTAL") {
          return;
        }
        const divGroup = createDOMElement("div", ["group"]);
        const spanGroupTitle = createDOMElement(
          "span",
          ["group-title"],
          group.replace("_", " ")
        );

        const tableGroup = createDOMElement("table");
        createThead(tableGroup);
        const tableTbody = tableGroup.createTBody(0);

        table.map((team, index) => {
          createRow(tableTbody, team, index);
        });

        divGroup.appendChild(spanGroupTitle);
        divGroup.appendChild(tableGroup);
        return divGroup;
      });
      containerGroup.textContent = "";
      allGroup.map((group) => {
        if (group) {
          containerGroup.appendChild(group);
        }
      });
    });
}

function getListTeam() {
  const cardContainer = document.querySelector(".row");
  cardContainer.appendChild(createLoading());
  fetch("https://api.football-data.org/v2/competitions/2001/teams", {
    headers: {
      "X-Auth-Token": "e3882deb1b47442484b161ea1d84fce6",
    },
  })
    .then((result) => result.json())
    .then((result) => {
      const allCard = result.teams.map((team) => {
        const { id, area, crestUrl, name } = team;

        const colContainer = createDOMElement("a", ["col", "s12", "l6", "xl4"]);
        colContainer.href = `#team?id=${id}`;
        colContainer.addEventListener("click", function (event) {
          const hash = colContainer.hash.substr(6);
          const param = extractHashUrl(hash);
          getDetailTeam(param.id);
        });

        const divCard = createDOMElement("div", ["card"]);

        const divCardImage = createDOMElement("div", ["card-image"]);

        const imageCard = createDOMElement("img");
        imageCard.src = crestUrl
          ? crestUrl
          : "https://upload.wikimedia.org/wikipedia/commons/b/b0/Nologo.svg";

        const divCardContent = createDOMElement("div", ["card-content"]);
        const teamName = createDOMElement("p", [], (text = name));
        const teamCountry = createDOMElement("p", [], (text = area.name));

        divCardImage.appendChild(imageCard);
        divCardContent.append(teamName, teamCountry);
        divCard.append(divCardImage, divCardContent);
        colContainer.appendChild(divCard);

        return colContainer;
      });

      cardContainer.textContent = "";
      allCard.map((card) => {
        cardContainer.appendChild(card);
      });
    });
}

function getDetailTeam(id) {
  const htmlContainer = document.querySelector("#root");
  htmlContainer.textContent = "";
  htmlContainer.append(createLoading());

  fetch(`https://api.football-data.org/v2/teams/${id}`, {
    headers: {
      "X-Auth-Token": "e3882deb1b47442484b161ea1d84fce6",
    },
  })
    .then((result) => result.json())
    .then((result) => {
      const {
        id,
        shortName,
        crestUrl,
        name,
        tla,
        website,
        founded,
        venue,
        squad,
      } = result;

      const teamTitle = `
      <div class="team-title">
        <h1>${shortName}</h1>
        <!-- button untuk menambahkan dan menghapus tim favorit  -->
        <span class="btn-favorite">&#9734;</span>
        <span class="tooltip">Add To Favorite</span>
        <hr /> 
      </div>`;
      const teamInfo = `
      <div class="team-info">
          <div class="row">
            <div class="col s12 xl4">
              <img src="${
                crestUrl ||
                "https://upload.wikimedia.org/wikipedia/commons/b/b0/Nologo.svg"
              }" alt="" />
            </div>
            <div class="col s12 xl8">
              <table>
                <tr>
                  <td>Full Name</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td>Team Code</td>
                  <td>${tla}</td>
                </tr>
                <tr>
                  <td>Official Website</td>
                  <td>
                    <a href="${website}">${website}</a>
                  </td>
                </tr>
                <tr>
                  <td>Founded</td>
                  <td>${founded}</td>
                </tr>
                <tr>
                  <td>Stadium</td>
                  <td>${venue}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>`;
      let squadTeam = "";
      squad.map((player, index) => {
        const { name, position, nationality, role } = player;

        if (index == 0) {
          squadTeam += `      
            <div class="team-squad">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Nationality</th>
                  </tr>
                </thead>
                <tbody>`;
        }
        squadTeam += `            
          <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${position || role}</td>
            <td>${nationality}</td>
          </tr>`;
        if (index == squad.length - 1) {
          squadTeam += `          
                </tbody>
              </table>
            </div>
            `;
        }
      });
      const html = teamTitle + teamInfo + squadTeam;
      htmlContainer.innerHTML = html;
      const btnStar = htmlContainer.querySelector(".btn-favorite");
      const tooltip = htmlContainer.querySelector(".tooltip");

      toggleStar();
      btnStar.addEventListener("click", (event) => {
        addToFavorite(result).then((data) => {
          if (!data) {
            // star outline
            btnStar.innerHTML = "&#9733;";
            tooltip.innerText = "Remove To Favorite";
          } else {
            // star full
            btnStar.innerHTML = "&#9734;";
            tooltip.innerText = "Add To Favorite";
          }
        });
      });

      function toggleStar() {
        checkFavorite(id).then((data) => {
          if (data) {
            // star outline
            btnStar.innerHTML = "&#9733;";
            tooltip.innerText = "Remove To Favorite";
          } else {
            // star full
            btnStar.innerHTML = "&#9734;";
            tooltip.innerText = "Add To Favorite";
          }
        });
      }
    });
}

function getSavedTeam() {
  const divFavoriteContainer = document.querySelector(".favorite-container");
  divFavoriteContainer.append(createLoading());

  getAllSavedTeam().then((result) => {
    divFavoriteContainer.textContent = "";
    result.map((data) => {
      const { id, area, name, crestUrl } = data;
      divFavoriteContainer.innerHTML += `
          <a href="#team?id=${id}">
            <div class="col s12 favorite-card">
            <img src="${
              crestUrl ||
              "https://upload.wikimedia.org/wikipedia/commons/b/b0/Nologo.svg"
            }" alt="" />
            <div class="favorite-content">
            <p>${name}</p>
            <p>${area.name}</p>
            </div>
            </div>
          </a>
          `;
    });
    const allAnchor = divFavoriteContainer.querySelectorAll("a");
    allAnchor.forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const hash = anchor.hash.substr(6);
        const param = extractHashUrl(hash);
        getDetailTeam(param.id);
      });
    });
  });
}
function insertToCell(row, text) {
  const element = row.insertCell(-1);
  element.innerText = text;
}

function createThead(table) {
  const header = table.createTHead();
  const row = header.insertRow(0);
  const listInsert = [
    "#",
    "Team",
    "MP",
    "W",
    "D",
    "L",
    "GF",
    "GA",
    "GD",
    "Pts",
    "Last 5",
  ];

  listInsert.map((insert) => {
    insertToCell(row, insert);
  });
}

function createRow(table, dataTeam, index) {
  const row = table.insertRow(index);
  const listInsert = [
    dataTeam.position,
    dataTeam.team,
    dataTeam.playedGames,
    dataTeam.won,
    dataTeam.draw,
    dataTeam.lost,
    dataTeam.goalsFor,
    dataTeam.goalsAgainst,
    dataTeam.goalDifference,
    dataTeam.points,
    dataTeam.form,
  ];

  listInsert.map((insert) => {
    if (insert.crestUrl) {
      const row2 = row.insertCell(-1);
      row2.innerHTML = `
      <a href="#team?id=${dataTeam.team.id}">
        <img class="team-logo" src="${insert.crestUrl}" alt="">
        <span>${insert.name}</span>
      </a>
      `;
      const rowAnchor = row2.querySelector("a");
      rowAnchor.addEventListener("click", (event) => {
        const hash = rowAnchor.hash.substr(6);
        const param = extractHashUrl(hash);
        getDetailTeam(param.id);
      });
      return;
    }
    insertToCell(row, insert);
  });
  return row;
}

function createDOMElement(name, classList = [], text = "") {
  const dom = document.createElement(name);
  dom.classList.add(...classList);
  dom.innerText = text;
  return dom;
}

function extractHashUrl(hash) {
  const params = hash.split("&");
  const result = {};
  params.forEach((param) => {
    const [key, value] = param.split("=");
    result[key] = value;
  });
  return result;
}

function createLoading() {
  const img = createDOMElement("img", ["loading-image"]);
  img.src = "assets/loading.gif";
  return img;
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
