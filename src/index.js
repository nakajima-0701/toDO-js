const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncomplieteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグを生成
  const li = document.createElement("li");

  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //spanタグを生成
  const span = document.createElement("span");
  span.innerText = text;

  //完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンの親タグを未完了リストから削除
    deleteFromIncomplieteList(completeButton.closest("li"));

    //TODO内容テキストを取得
    const textTarget = completeButton.parentNode;
    const todoText = textTarget.firstElementChild.innerText;

    //完了リストに追加する要素
    const addTarget = completeButton.closest("li");

    //div以下を初期化
    textTarget.textContent = null;

    //spanタグを生成
    const span = document.createElement("span");
    span.innerText = todoText;

    //buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    textTarget.appendChild(span);
    textTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグを未完了リストから削除
    deleteFromIncomplieteList(deleteButton.closest("li"));
  });

  //liタグの子要素に各要素を設定
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
