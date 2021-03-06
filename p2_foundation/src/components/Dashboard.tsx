import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Reimbursement } from "../models/reimbursement";
import { Principal } from "../models/principal";
import { getAllReimbursement } from "../remote/reimbursement-service";

interface IDashboardProps {
    currentUser: Principal | undefined
}

function Dashboard(props: IDashboardProps) {

    // This is not a piece of component state
    // Changing its value will not force a re-render of the component
    // let cards: Reimbursement[] = [];
    const [reimbursement, updateReimbursement] = useState<any[]>([]);

    // a function that will fire off each time the component
    // is rendered
    useEffect(() => {
        if (reimbursement.length == 0) {
            getAllReimbursement().then(resp => {
                updateReimbursement(resp.data);
            });
        }
    });

    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <>
            <h1>Welcome, {props.currentUser.username}!</h1>
            {reimbursement.map((reimbursement, idx) => {
                return (
                    <div key={idx}>
                        <h4>Reimbursement Id: {reimbursement.id}</h4>
                        <h5>Amount: {reimbursement.amount}</h5>
                        <h5>Submitted: {reimbursement.submitted}</h5>
                        <h5>Resolved: {reimbursement.resolved}</h5>
                        <h5>Description: {reimbursement.description}</h5>
                        <h5>PaymentId: {reimbursement.paymentId}</h5>
                        <h5>AuthorId: {reimbursement.authorId}</h5>
                        <h5>ResolvedId: {reimbursement.resolverId}</h5>
                        <h5>StatusId: {reimbursement.statusId}</h5>
                        <h5>TypeId: {reimbursement.type.typeId.typeIdName}</h5>
                        {/*<h5>Category: {reimbursement.category.categoryName}</h5>*/}
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export default Dashboard;