import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios'
import Item from './Item'
import Notifs from './Notifs'
import Filter from './Filter'
import AllItems from './AllItems'

export default function Home() {

  return (
    <>
      <Filter />
      <AllItems />
    </>
  )
}
