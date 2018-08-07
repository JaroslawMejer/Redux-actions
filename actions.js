const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    comments: [
        {
            id: '12741danx1278',
            text: 'Nowy komentarz',
            votes: 0
        },
        {
            id: '12741danb1278',
            text: 'Stary komentarz',
            votes: 42
        }
    ]
}

{
	type: ADD_COMMENT,
	text: 'My first comment!'
}

{
	type: REMOVE_COMMENT,
	id: 20
}

{
	type: EDIT_COMMENT,
	id: 20,
	text: 'New text'
}

{
	type: THUMB_UP_COMMENT,
	id: 20,
	votes++
}

{
	type: THUMB_DOWN_COMMENT,
	id: 20, 
	votes--
}

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4(),
		votes: 0
	}
}

function removeComment(id){
	return{
		type: REMOVE_COMMENT,
		id
	}
}

function editComment(text, id){
	return{
		type: REMOVE_COMMENT,
		id,
		text
	}
}

function thumbUpComment(id){
	return{
		type: THUMB_UP_COMMENT,
		id
	}
}

function thumbDownComment(id){
	return{
		type: THUMB_DOWN_COMMENT,
		id
	}
}

