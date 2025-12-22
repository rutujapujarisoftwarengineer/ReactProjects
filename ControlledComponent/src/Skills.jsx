

function Skills() {
    const [skills, setSkills] = useState([]);
    return (

        const handleSkills = function (event) {
            console.log(event.target.value, event.target.checked);

            if (event.target.checked) {
                setSkills([...skills, event.target.value]);
            } else {
                setSkills(skills.filter((item) => item !== event.target.value));
            }
        

            <div>
                <h2>Select Your Skills</h2>
                <input type="checkbox" id="php" value="php" />
                <label htmlFor="php">PHP</label>

                <input type="checkbox" id="js" value="js" />
                <label htmlFor="js">JS</label>
                <br /><br />

                <input type="checkbox" id="node" value="node" />
                <label htmlFor="node">Node</label>
                <br /><br />

                <input type="checkbox" id="java" value="java" />
                <label htmlFor="java">Java</label>

                <h1>{skills.toString()}</h1>


            </div>;
        }
    

    );
}



export default Skills;