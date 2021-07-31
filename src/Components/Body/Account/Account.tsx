import React from 'react';

const Account = () => {

    const styles = {
        userDetails: {
            fontWeight: 400,
        }
    }

    return(
        <div>
            <h1>User Name</h1>
            <h2 style={styles.userDetails}>default@mail.org.za</h2>
            <h2 style={styles.userDetails}>Number of posts: 2</h2>
        </div>
    );
}

export default Account;