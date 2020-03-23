import React from 'react';

function GPPage(){
        return(
            <article>
                <nav id="lnb">
                    <button type="reset">
                        새로고침
                    </button>
                    <button type="button" onclick="location.href='/servicegp/add'"/>
                    <button type="button" onclick="location.href='/servicegp/add'">
                        등록
                    </button>
                </nav>
                <div id="gpitems" class="content-box"/>
                
            </article>
        )
}
export default GPPage;