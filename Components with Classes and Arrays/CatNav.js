// // change this Component to a class!
// function CatNav(props) {
//     // get data from props and use map to build an array of <li>
//     // ... code goes here
//     return (
//         <div>
//             {/* Your Code Here */}
//         </div>
//     )
// }


class CatNav extends React.Component {
    constructor() {
        super()
    }
    render() {
        const navLinks = this.props.data.map((link, i) => {
            return (
                <li key={i} className="cat-link left valign-wrapper">
                    <i className="material-icons">{link.icon}</i>{link.title}
                </li>
            )
        })
        return (
            <div className="row">
                <ul className="cat-nav center-align">
                    {navLinks}
                </ul>
            </div>
        )
    }
}
