"use client";

import { useEffect, useRef, useState } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  // 모달 내 드롭다운
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] =
    useState<boolean>(false);
  const [isStartTimeDropdownOpen, setIsStartTimeDropdownOpen] =
    useState<boolean>(false);
  const [isEndTimeDropdownOpen, setIsEndTimeDropdownOpen] =
    useState<boolean>(false);
  const [selectedActivity, setSelectedActivity] = useState<string>("선택");
  const [selectedStartTime, setSelectedStartTime] = useState<string>("선택");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("선택");

  const dropdownOutsideRef = useRef<HTMLDivElement | null>(null);
  const startTimeDropdownRef = useRef<HTMLDivElement | null>(null);
  const endTimeDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsActivityDropdownOpen((prev) => !prev);
  };

  const toggleStartTimeDropdown = () => {
    setIsStartTimeDropdownOpen((prev) => !prev);
  };

  const toggleEndTimeDropdown = () => {
    setIsEndTimeDropdownOpen((prev) => !prev);
  };

  const handleActivity = (activity: string) => {
    setSelectedActivity(activity);
    setIsActivityDropdownOpen(false);
  };

  const handleStartTime = (time: string) => {
    setSelectedStartTime(time);
    setIsStartTimeDropdownOpen(false);
  };

  const handleEndTime = (time: string) => {
    setSelectedEndTime(time);
    setIsEndTimeDropdownOpen(false);
  };

  const addSchedule = () => {
    console.log("예약 성공");
  };

  const handleClickDropdownOutside = (e: MouseEvent) => {
    if (
      dropdownOutsideRef.current &&
      !dropdownOutsideRef.current.contains(e.target as Node)
    ) {
      setIsActivityDropdownOpen(false);
    }
    if (
      startTimeDropdownRef.current &&
      !startTimeDropdownRef.current.contains(e.target as Node)
    ) {
      setIsStartTimeDropdownOpen(false);
    }
    if (
      endTimeDropdownRef.current &&
      !endTimeDropdownRef.current.contains(e.target as Node)
    ) {
      setIsEndTimeDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (
      isActivityDropdownOpen ||
      isStartTimeDropdownOpen ||
      isEndTimeDropdownOpen
    ) {
      window.addEventListener("click", handleClickDropdownOutside);
    }
    return () =>
      window.removeEventListener("click", handleClickDropdownOutside);
  }, [isActivityDropdownOpen, isStartTimeDropdownOpen, isEndTimeDropdownOpen]);

  return {
    dropdownOutsideRef,
    toggleDropdown,
    selectedActivity,
    isActivityDropdownOpen,
    handleActivity,
    startTimeDropdownRef,
    toggleStartTimeDropdown,
    selectedStartTime,
    isStartTimeDropdownOpen,
    handleStartTime,
    endTimeDropdownRef,
    toggleEndTimeDropdown,
    selectedEndTime,
    isEndTimeDropdownOpen,
    handleEndTime,
    addSchedule,
    isOpenModal,
    setIsOpenModal,
  };
};
