import React from 'react'
import tw from 'twin.macro'

export function TimelinePass() {
  return (
    <div id="icon-circle" css={tw`w-3 h-3 xl:(w-4 h-4) bg-grayFS-600 border border-grayFS-800 rounded-full`}></div>
  )
}
export function TimelinePresent() {
  return (
    <div id="icon-circle-layer1" css={tw`w-6 h-6 bg-white border border-primaryFS-200 rounded-full flex justify-center items-center`}>
      <div id="icon-circle-layer2" css={tw`w-4 h-4 bg-white border border-primaryFS-500  rounded-full`}></div>
    </div>
  )
}
export function TimelineFuture() {
  return (
    <div id="icon-circle" css={tw`w-3 h-3 xl:(w-4 h-4) bg-white border border-primaryFS-500 rounded-full`}></div>
  )
}
