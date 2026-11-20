// 
// Schema
// 

const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    videoId: Number,
    title: String,
    description: String,
    channelName: String,
    uploadDate: Date,
})
module.exports = mongoose.model('video', videoSchema);



const videoDetailsSchema = mongoose.Schema({
    videoID: Number,
    Resolution: String,
    FrameRate: Number,
    Codec: String,
})
module.exports = mongoose.model('videoDetails', videoDetailsSchema);


// 
// Database
// 
let videos = [
    video1 = {
        videoID: 1,
        title: 'Python Tutorial for beginners',
        description: 'Full course for Python',
        channelName: 'Pro-Programmer',
        uploadDate: new Date("2015-10-10"),
    },

    video2 = {
        videoID: 2,
        title: 'Java Tutorial for beginners',
        description: 'Full course for Java',
        channelName: 'Pro-Programmer',
        uploadDate: new Date("2019-10-10"),
    },

    video3 = {
        videoID: 3,
        title: 'Study music for 2 hours',
        description: 'Keep focused with this study music and use it to concentrate.',
        channelName: 'Study music',
        uploadDate: new Date("2022-10-10"),
    }]

let videoDetail = [

    videoDetails1 = {
        videoID: 1,
        Resolution: "144p",
        FrameRate: 24,
        Codec: "H.264",
    },

    videoDetails2 = {
        videoID: 1,
        Resolution: "360p",
        FrameRate: 30,
        Codec: "VP8",
    },

    videoDetails3 = {
        videoID: 1,
        Resolution: "720p",
        FrameRate: 60,
        Codec: "AV1",
    }]

// 
// VideoHostingManager node modules
// 

videoHostingManager = {

    // Function 1: Upload video
    // Assume that the video content is uploaded to a server


    async uploadVideo(Id, title, description, channelName, uploadDate, resolution, framerate, codec) {
        try {
            await video.create({
                videoID: Id,
                title: title,
                description: description,
                channelName: channelName,
                uploadDate: uploadDate,
            })

            await videoDetails.create({
                videoID: Id,
                resolution: resolution,
                framerate: framerate,
                codec: codec,
            })

            console.log(`${title} has been added to the system successfully`)
        }
        catch (e) {
            console.log(e.message)
            throw new Error('Video has not been uploaded successfully.')
        }
    },

    // Function 2: Update video (Title, description)

    async updateVideo(conditions, updates) {
        try {
            let retrievedVideo = await video.findOneAndUpdate(conditions, updates);
            if (!retrievedVideo)
                return "Unable to find record to update";
            else
                return "Video has been updated successfully";
        }
        catch (e) {
            console.log(e.message)
            throw new Error('Video has not been updated.')

        }
    },

    // Function 3: Delete video 

    async deleteVideo(videoID) {
        try {
            let retrievedVideo = await video.findByIdAndDelete(videoID);
            let retrievedVideoDetails = await videoDetails.findByIdAndDelete(videoID);
            if (!retrievedVideo && !retrievedVideoDetails)
                return "No record of video and video details are found.";
            else if (retrievedVideo && !retrievedVideoDetails)
                return "Video has been deleted successfully. \n No record of video details is found.";
            else if (!retrievedVideo && retrievedVideoDetails)
                return "No Record of video is found. \n Video details have been deleted successfully";
            else if (retrievedVideo && retrievedVideoDetails)
                return "Video and video details are deleted successfully";
        }
        catch (e) {
            console.log(e.message)
            throw new Error("Error retrieving video and video details records. Please try again")
        }
    },

    // Function 4: Search for the channel's video

    async getVideoByChannelName(conditions) {
        try {
            let results = await video.find(conditions);
            return results;
        }
        catch (e) {
            console.log(e.message)
            throw new Error("Error retrieving video by channel name.")
        }
    },

    // Function 5: Sort the videos by date

    async sortVideoByDate(date1, date2) {
        try {
            let results = await video.find();
            let sortedResults = await results.sort((a, b) => new Date(date1.date) - new Date(date2.date))
            return sortedResults;
        }
        catch (e) {
            console.log(e.message)
            throw new Error("Error sorting video")
        }
    }
}



module.exports = videoHostingManager;