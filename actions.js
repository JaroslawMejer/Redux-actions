export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

/*{
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
    ],
    users: [
        {
            id: '121jk6d89h2d',
            firstName: 'Jan',
            lastName: 'Nowak',
            comments: ['12741danb1278'],
        },
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


*/

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
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
		type: EDIT_COMMENT,
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

