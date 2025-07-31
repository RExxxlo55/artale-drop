fetch("artale_event_data.json")
  .then((res) => res.json())
  .then((data) => {
    const tbody = document.querySelector("#event-table tbody");
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item["重要性"] || ""}</td>
        <td>${item["活動/任務名稱"] || ""}</td>
        <td>${item["任務內容"] || ""}</td>
        <td>${item["頻率"] || ""}</td>
        <td>${item["NPC/位置"] || ""}</td>
        <td>${item["備註"] || ""}</td>
      `;
      tbody.appendChild(row);
    });
  });
