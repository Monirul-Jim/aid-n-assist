import React from 'react';

const Feedback = () => {
    const handleFeedback = event =>{
        event.preventDefault()
        const form = event.target;
        const feedback = form.feedbackarea.value;
        console.log(feedback)

    }
    return (
        <div className='my-5'>
            <h1 className='text-5xl font-serif text-gray-600 text-center'>=== Feedback ==</h1>
            <div>
                
<form onSubmit={handleFeedback}>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" className="sr-only">Your comment</label>
           <textarea name='feedbackarea' id="comment" rows="4" className="w-full h-52 px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write For FeedBack..." required></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
       <input
  type="submit"
  value="FeedBack"
  className="flex items-center justify-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-green-900 hover:bg-green-800 w-full"
/>

          
       </div>
   </div>
</form>
<p className="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>

            </div>
        </div>
    );
};

export default Feedback;