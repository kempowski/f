// @ts-nocheck
// export const url = "https://fugnebel.pockethost.io/"
export const url = "http://pocket.fugbach.one"


export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}

export const getVideoURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}

export const getAudioURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `/gapi/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}