import { IGreeting } from "classes/IGreeting";
import { useEffect } from "react";

interface IProps {
  greeting: IGreeting;
}

export default function Footer(props: IProps) {
  useEffect(() => {
    console.log(`${props.greeting.message} ${Footer.name}`);
  }, []);

  return (
    <footer className="bg-white" id="footer">
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Business</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="https://github.com/JuricaHrg/q-assignment"
                  target="_blank"
                  className="text-muted"
                >
                  GitHub Repository
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://q.agency/"
                  target="_blank"
                  className="text-muted"
                >
                  Q Agency
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://brainit.agency/"
                  target="_blank"
                  className="text-muted"
                >
                  BrainIT Agency
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Personal</h6>
            <p className="text-muted mb-2">
              Name: <span className="text-dark">Jurica Hrg</span>
            </p>
            <p className="text-muted mb-2">
              Mail:{" "}
              <a
                href="mailto:jurica.hrg@brainit.agency?subject=Contact%20via%20Task"
                className="text-muted"
              >
                <span className="text-dark">jurica.hrg@brainit.agency</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
