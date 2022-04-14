import React from "react";
import Layout from "../layout/Layout";
import ClientItem from "../components/ClientItem";
import CreateClientForm from "../components/CreateClientForm";
import LetterButtonsContainer from "../components/LetterButtonsContainer";
import Pagination from "../components/Pagination";
import GreyBoxWrap from "../components/GreyBoxWrap";

function Clients() {
  return (
    <Layout>
      <h2>
        <i className="ico clients"></i>Clients
      </h2>
      <GreyBoxWrap title={" client"} />
      <CreateClientForm />
      <LetterButtonsContainer />
      <div className="accordion-wrap clients">
        <ClientItem name={"ADAM Software NV"} />
        <ClientItem name={"Clockwork"} />
        <ClientItem name={"Emperor Design"} />
      </div>
      <Pagination />
    </Layout>
  );
}

export default Clients;
