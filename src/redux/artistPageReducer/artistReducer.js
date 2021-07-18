const INITIAL_STATE = {
    grid: [
        { img: 'https://i.ibb.co/D8mHFNp/img-1.jpg', id: 1, name: '', grid: 'card-2-1', head: 'Aniel Someillan'  },
        { img: 'https://i.ibb.co/n6Tg8MT/img-2.jpg', id: 2, name:  'My Music', grid: 'card-1-1'},
        { img: 'https://i.ibb.co/Qch7J8h/img-3.jpg', id: 3, name:  'My Proyects', grid: 'card-1-1'},
        { img: 'https://i.ibb.co/8d3mXYz/img-4.jpg', id: 4, name:  'My Videos', grid: 'card-2-1'},
        { img: 'https://i.ibb.co/s6JTzTm/img-5.jpg', id: 5, name:  'Gallery', grid: 'card-1-1'},
        { img: 'https://i.ibb.co/ZgcmcVs/img-6.jpg', id: 6, name:  'Contact', grid: 'card-1-1'}
    ]
};

const artistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
} 

export default artistReducer;