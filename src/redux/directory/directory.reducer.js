const INITIAL_STATE = {
     portafolios: [
            {
                 title: 'Web Developer',
                 imgUrl: 'https://i.ibb.co/McwpzdF/Vamos-Latam-Colab-0224.jpg',
                 id: 1,
                 grid: 'gridItem1',
                 linkUrl: 'anielsomeillan/web-developper',
                 from: {
                   opacity: 0
                 },
                 to: {
                   opacity: 1
                 },
                 config: {
                   mass: 10,
                   tension: 10
                 },
                 delay: '1000'
               },
               {
                 title: 'Artist',
                 imgUrl: 'https://i.ibb.co/8d3mXYz/img-4.jpg',
                 id: 2,
                 grid: 'gridItem2',
                 linkUrl: 'anielsomeillan/artist'
               },
               { 
                 title: 'Social Media',
                 imgUrl: 'https://i.ibb.co/WHjfj6r/V7A1865.jpg',
                 id: 3,
                 grid: 'gridItem3',
                 linkUrl: ''
               },
               {
                 title: 'Model',
                 imgUrl: 'https://i.ibb.co/GtSKWcz/V7A5472.jpg',
                 size: 'large',
                 id: 4,
                 grid: 'gridItem4',
                 linkUrl: 'anielsomeillan/model'
               },
               {
                 title: 'My Courses',
                 imgUrl: 'https://i.ibb.co/h7bD6DF/V7A5489.jpg',
                 size: 'large',
                 id: 5,
                 grid: 'gridItem5',
                 linkUrl: 'anielsomeillan/my-courses'
               },
               {
                 title: 'My Bio',
                 imgUrl: 'https://i.ibb.co/h7pQM5F/Vamos-Latam-Colab-0233.jpg',
                 size: 'large',
                 id: 6,
                 grid: 'gridItem6',
                 linkUrl: 'anielsomeillan/bio'
               } 
         ]
};

const directoryReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;