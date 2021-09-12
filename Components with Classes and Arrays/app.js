const data = [
    {
        icon: "code",
        title: "Development"
    },
    {
        icon: "business",
        title: "Business"
    },
    {
        icon: "computer",
        title: "IT & Software"
    },
    {
        icon: "library_books",
        title: "Office Productivity"
    },
    {
        icon: "person",
        title: "Personal Development"
    },
    {
        icon: "mode_edit",
        title: "Personal Development"
    },
    {
        icon: "track_changes",
        title: "Marketing"
    }, {
        icon: "directions_bike",
        title: "Health & Fitness"
    },
    {
        icon: "music_note",
        title: "Music"
    },
]
// const cards = data.map((course, i) => {
//     return < Card data={course} key={i} />;
// })
ReactDOM.render(
    <CatNav data={data} />,
    document.getElementById('root')
);
{/* <div className="row">
    <ul class="cat-nav center-align"></ul>
    </div> */}