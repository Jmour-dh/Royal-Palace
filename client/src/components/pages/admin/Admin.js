import React from 'react'
import AdminNav from './components/AdminNav/AdminNav'
import styles from './Admin.module.scss';

function Admin() {
  return (
    <div className={`d-flex flex-fill p-20 ${styles.container}`}>
      <AdminNav/>
    </div>
  )
}

export default Admin