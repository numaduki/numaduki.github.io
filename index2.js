// Geminiで生成
// const imgTags = document.querySelectorAll('section img:not(:has(a))');
// for (const imgTag of imgTags) {
// 	const newATag = document.createElement('a');
// 	newATag.href = imgTag.src;
// 	imgTag.parentNode.insertBefore(newATag, imgTag);
// 	newATag.appendChild(imgTag);
// }

// 2024-09-22
// 上記が期待通りに動作していなかった ChatGPTで生成・一部変更
document.querySelectorAll('section img').forEach(function(img) {
    // 親要素がaタグでないか確認
    if (img.parentElement.tagName.toLowerCase() !== 'a') {
        // 新しいaタグを作成
        const link = document.createElement('a');
        // imgのsrc属性をリンクのhrefに設定
        link.href = img.src;
        // クラス付与
        link.classList.add('expand');
        // 画像をaタグの子要素として追加
        link.appendChild(img.cloneNode(true));
        // 元のimgタグを新しいaタグで置き換え
        img.parentElement.replaceChild(link, img);
    }
});
document.querySelectorAll('a').forEach(function(anchor) {
    // リンクテキストが「http」で始まるかを確認
    if (anchor.textContent.startsWith('http')) {
        // クラスを付与
        anchor.classList.add('url_as_linktext');
    }
});
