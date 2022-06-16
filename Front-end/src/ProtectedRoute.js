import React, { useEffect, useState } from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'
import cookie from 'js-cookie'

export default function ProtectedRoute({ ...rest }) {

   const isAuth = cookie.get("LoggedIn") === "true";

  return isAuth ? <Outlet context={isAuth} /> : <Navigate to="/" />;
}