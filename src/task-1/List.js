import ListItem from "./ListItem";

function List() {
    return (
        <ul className="list">
            <ListItem text="Introduction" />
            <ListItem text="Download" />
            <ListItem text="Contents" />
            <ListItem text="Browsers & devices" />
            <ListItem text="JavaScript" />
            <ListItem text="Webpack" />
            <ListItem text="Parcel" />
            <ListItem text="Vite" />
            <ListItem text="Accessibility" />
            <ListItem text="RFS" />
            <ListItem text="RTL" />
            <ListItem text="Contribute" />
        </ul>
    );
}

export default List;
