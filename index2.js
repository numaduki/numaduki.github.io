const imgTags = document.querySelectorAll('section img:not(:has(a))');
for (const imgTag of imgTags) {
	const newATag = document.createElement('a');
	newATag.href = imgTag.src;
	imgTag.parentNode.insertBefore(newATag, imgTag);
	newATag.appendChild(imgTag);
}
